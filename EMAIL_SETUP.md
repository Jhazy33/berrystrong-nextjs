# Email Setup Guide

The Berry Strong website now has functional contact and registration forms that send emails via Resend.

## Prerequisites

1. **Resend Account**: Create an account at https://resend.com/
2. **API Key**: Get your API key from https://resend.com/api-keys
3. **Domain Verification**: Verify your sending domain (e.g., berrystrong.net)

## Setup Steps

### 1. Set Environment Variables

**Local Development**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Resend API key:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Production (Vercel)**:
1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add: `RESEND_API_KEY` with your API key value

### 2. Configure Sender Domains

In Resend, you need to verify your domain:

1. Go to https://resend.com/domains
2. Add your domain (e.g., berrystrong.net)
3. Add DNS records as instructed by Resend:
   - TXT record for verification
   - MX records for email delivery
   - CNAME records for DKIM and SPF

### 3. Update From Addresses

The forms currently use these "from" addresses:
- Contact form: `contact@berrystrong.net`
- Registration form: `registration@berrystrong.net`
- Admin notifications: `info@berrystrong.net`

**Important**: Make sure these email addresses exist or are set up in Resend.

## How It Works

### Contact Form

**Endpoint**: `POST /api/contact`

**Flow**:
1. User submits contact form (name, email, phone, message)
2. Form data validated on client and server
3. Email sent to `info@berrystrong.net` with submission details
4. User sees success message

**Email Template**:
```
Subject: New Contact Form Submission from {name}

Name: {name}
Email: {email}
Phone: {phone}
Message: {message}
```

### Registration Form

**Endpoint**: `POST /api/registration`

**Flow**:
1. User fills registration form (name, email, phone, plan, goals, experience)
2. Form data validated
3. Two emails sent:
   - **Admin notification** to `info@berrystrong.net` with all registration details
   - **Welcome email** to client with next steps
4. User sees confirmation message

**Admin Email**:
```
Subject: New Registration: {firstName} {lastName} - {plan}

Client: {firstName} {lastName}
Email: {email}
Phone: {phone}
Plan: {plan}
Goals: {goals}
Experience: {experience}
```

**Client Welcome Email**:
```
Subject: Welcome to Berry Strong!

Hi {firstName},

Thank you for registering for our {plan} plan!

Next steps:
1. Check your email for welcome packet
2. We'll contact you at {phone} for consultation
3. Complete health forms before first session

Questions? Reply to this email!
```

## Testing

### Test Without Sending Real Emails

To test the forms without sending actual emails, you can temporarily modify the API routes to log instead of send:

```typescript
// In app/api/contact/route.ts
console.log('Email data:', { name, email, phone, message });
// Comment out the actual resend.emails.send() call
```

### Test with Real Emails

1. Make sure `.env.local` has your API key
2. Start development server: `npm run dev`
3. Fill out forms on http://localhost:3000/contact and http://localhost:3000/registration
4. Check the email inbox you're sending to

## Security Features

### Input Validation
- Required fields enforced on both client and server
- Email format validated with regex
- HTML injection prevented (messages sent as plain text, not rendered)

### Rate Limiting (Recommended for Production)

Add rate limiting to prevent abuse. Example using Vercel's edge config:

```javascript
// rate-limit.ts (optional enhancement)
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "1 m"),
});
```

### Email Verification (Recommended)

For production, consider:
1. Email verification link sent to user
2. Confirm email before sending notifications
3. Prevent spam registrations

## Troubleshooting

### Emails Not Sending

1. **Check API Key**: Verify `RESEND_API_KEY` is set correctly
2. **Check Domain**: Verify domain is verified in Resend
3. **Check Logs**: Look at Vercel function logs for error messages
4. **Test API Key**: Test with curl:
```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer re_xxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "test@berrystrong.net",
    "to": "your-email@example.com",
    "subject": "Test Email",
    "html": "<p>This is a test</p>"
  }'
```

### Forms Not Submitting

1. **Check Browser Console**: Look for JavaScript errors
2. **Check Network Tab**: See if API calls are being made
3. **Check API Routes**: Ensure routes are returning 200 status
4. **Clear Cache**: Hard refresh the page (Cmd+Shift+R)

## Production Deployment Checklist

- [ ] Resend account created
- [ ] API key added to Vercel environment variables
- [ ] Domain verified in Resend
- [ ] DNS records configured (MX, TXT, CNAME)
- [ ] Email addresses created or forwarded
- [ ] Test forms on production site
- [ ] Check spam folder for test emails
- [ ] Set up email monitoring/tracking
- [ ] Configure rate limiting (optional but recommended)

## Email Analytics

Resend provides analytics at https://resend.com/dashboard:
- Email delivery rates
- Open rates
- Click rates
- Bounce handling
- Spam complaints

## Next Steps

After email setup is working:

1. **Database Integration**: Store registrations in database
2. **Email Automation**: Drip campaigns for new leads
3. **CRM Integration**: Connect to customer management system
4. **SMS Notifications**: Add SMS for urgent communications
5. **Calendar Integration**: Automatic consultation scheduling

## Cost

Resend Pricing (as of 2026):
- **Free**: 3,000 emails/month
- **Pro**: $20/month for 50,000 emails/month
- **Premium**: Custom pricing for high volume

For most fitness businesses, the free tier is sufficient.

## Support

- Resend Docs: https://resend.com/docs
- Next.js API Routes: https://nextjs.org/docs/api-routes/introduction
- Vercel Environment Variables: https://vercel.com/docs/concepts/projects/environment-variables

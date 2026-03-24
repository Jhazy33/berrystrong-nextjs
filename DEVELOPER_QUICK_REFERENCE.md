# Developer Quick Reference - Layout Fixes

## Files Modified
- `/components/layout/Header.tsx`
- `/components/sections/Hero.tsx`
- `/components/sections/Services.tsx`
- `/components/sections/Testimonials.tsx`
- `/components/sections/CallToAction.tsx`

## Breaking Changes
**None** - All changes are backward compatible

## Key Pattern Changes

### 1. Card Component Usage
**Before**: Used Card component for Services and Testimonials
**After**: Custom card implementations for better control

**Why**: Card component's default padding structure caused layout issues. Custom divs provide precise control over spacing and hover effects.

**Pattern to Follow**:
```tsx
// Good: Custom card for complex layouts
<div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8">
  {/* Content */}
</div>

// Avoid: Card component for complex layouts with images
<Card className="...">
  {/* Content */}
</Card>
```

### 2. Responsive Navigation
**Pattern**: Dual breakpoints for desktop/tablet navigation

```tsx
// XL screens (1280px+)
<nav className="hidden xl:flex items-center space-x-10">

// LG tablets (1024px-1279px)  
<nav className="hidden lg:flex xl:hidden items-center space-x-6">
```

**Why**: Prevents navigation items from being cramped on smaller desktop screens.

### 3. Background Overlays
**Pattern**: Gradient overlays instead of solid colors

```tsx
// Good: Gradient for depth
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

// Avoid: Solid overlays that hide backgrounds
<div className="absolute inset-0 bg-gray-dark"></div>
```

**Why**: Gradients provide better text readability while maintaining background visibility.

### 4. Hover Effects
**Pattern**: Group hover with multiple effects

```tsx
<div className="group">
  <Image className="group-hover:scale-105 transition-transform duration-500" />
</div>
```

**Why**: Provides smooth, professional interactive feedback.

### 5. Spacing System
**Pattern**: Consistent spacing increments

- Section padding: `py-40` (160px)
- Card padding: `p-6` (24px) or `p-8` (32px)
- Element margins: `mb-6` (24px), `mb-8` (32px), `mb-16` (64px)
- Grid gaps: `gap-8` (32px), `gap-10` (40px)

**Why**: Establishes visual rhythm and breathing room.

## Common Issues & Solutions

### Issue: Cards getting cut off
**Solution**: Remove Card component, use custom div with `overflow-hidden`

### Issue: Images overlapping text
**Solution**: Use dedicated padding div: `<div className="p-6">{content}</div>`

### Issue: Navigation cramped on tablet
**Solution**: Use dual breakpoints with smaller text on LG screens

### Issue: Background too dark
**Solution**: Increase opacity and use gradient overlay

### Issue: Profile images squished
**Solution**: Add `flex-shrink-0` to prevent compression

### Issue: Text wrapping in nav
**Solution**: Add `whitespace-nowrap` to nav items

## Testing Checklist

- [ ] Desktop (1280px+): All 8 nav items visible with proper spacing
- [ ] Tablet (1024-1279px): Nav items use smaller font
- [ ] Mobile (<1024px): Hamburger menu appears
- [ ] Hero: Background image visible, text readable
- [ ] Services: Cards have proper height, hover effects work
- [ ] Testimonials: Profile images 80px, not squished
- [ ] All sections: Consistent spacing, no cutoff content
- [ ] Hover states: Smooth transitions on all interactive elements

## Linting
All files pass ESLint with no errors or warnings.

## TypeScript
All files compile with `tsc --noEmit` with no errors.

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- No custom CSS (all Tailwind utilities)
- GPU-accelerated transforms only (scale, opacity)
- `will-change` not needed (simple transforms)
- Images use Next.js optimization with `fill` and `priority` where appropriate

## Accessibility
- Semantic HTML maintained
- ARIA labels preserved
- Color contrast ratios maintained
- Keyboard navigation preserved
- Focus management preserved

## Future Considerations

### Potential Enhancements
1. **Lazy loading**: Add `loading="lazy"` to below-fold images
2. **Animation library**: Consider Framer Motion for complex animations
3. **Image optimization**: Review WebP conversion for all images
4. **Mobile nav**: Consider slide-in animation for mobile menu
5. **Service cards**: Consider stagger animation on scroll

### Maintenance Notes
- Custom card implementations should be documented if reused
- Spacing values should follow Tailwind's spacing scale
- Hover effects should use GPU-accelerated properties only
- Gradient values may need adjustment based on background images

## Related Documentation
- `LAYOUT_FIXES_SUMMARY.md` - Detailed fix descriptions
- `VISUAL_CHANGES.md` - Before/after comparisons
- Tailwind CSS docs: https://tailwindcss.com/docs
- Next.js Image docs: https://nextjs.org/docs/api-reference/next/image

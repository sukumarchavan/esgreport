# Secure Content Website

A React-based secure website with content protection features, access control, and email verification. This application implements comprehensive security measures to prevent unauthorized copying, printing, and access to protected content.

## Features

### 🔒 Content Security
- **Print Prevention**: Disables print functionality across all browsers
- **Copy Protection**: Prevents text selection, copying, and right-click context menu
- **Download Prevention**: Blocks content downloading and saving
- **Developer Tools Detection**: Detects and prevents access to browser developer tools
- **Keyboard Shortcut Blocking**: Disables common shortcuts (Ctrl+S, Ctrl+P, F12, etc.)

### 🛡️ Access Control
- **Limited Access**: Visitors can only access the first 3 pages by default
- **Email Verification**: OTP-based authentication for accessing restricted content
- **Session Management**: Secure session handling with automatic timeout
- **Access Indicators**: Visual indicators showing current access level

### 📱 User Experience
- **Responsive Design**: Works seamlessly across all devices and screen sizes
- **Professional UI**: Clean, modern interface with smooth animations
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Accessibility**: WCAG compliant with proper focus management

### 🔐 Security Features
- **Content Security Policy (CSP)**: Prevents XSS and injection attacks
- **Code Obfuscation**: Built-in JavaScript obfuscation for production
- **Secure Headers**: X-Frame-Options, X-Content-Type-Options, and more
- **Session Security**: Secure session management with automatic logout

## Technology Stack

- **Frontend**: React 18 with modern hooks
- **Routing**: React Router DOM v6
- **Styling**: CSS3 with Grid and Flexbox
- **Security**: Content Security Policy, XSS Protection
- **Build Tool**: Create React App
- **Package Manager**: npm

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd secure-content-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Serve the production build**
   ```bash
   npx serve -s build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with access control
│   ├── AccessForm.js   # Email verification modal
│   └── *.css           # Component-specific styles
├── context/            # React context providers
│   └── SecurityContext.js  # Authentication and security state
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Contact.js      # Contact page (restricted)
│   ├── Blog.js         # Blog page (restricted)
│   ├── Resources.js    # Resources page (restricted)
│   └── *.css           # Page-specific styles
├── App.js              # Main application component
├── index.js            # Application entry point
└── *.css               # Global styles
```

## Security Implementation

### Content Protection
- Global event listeners prevent right-click, keyboard shortcuts, and text selection
- CSS properties disable user selection and print functionality
- JavaScript obfuscation in production builds

### Access Control
- React Context manages authentication state
- Local storage for session persistence
- Automatic session timeout (30 minutes)
- Route protection for restricted pages

### Email Verification
- OTP generation and validation
- Form validation and error handling
- Secure modal implementation
- Toast notifications for user feedback

## Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_EMAIL_SERVICE=your_email_service_here
```

### Security Headers
The application includes comprehensive security headers in `public/index.html`:

- Content Security Policy (CSP)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Cache control headers

## Customization

### Styling
- Modify `src/App.css` for global styles
- Update component-specific CSS files for individual styling
- Use CSS custom properties for consistent theming

### Content
- Update page components in `src/pages/` to modify content
- Modify the access form in `src/components/AccessForm.js`
- Update navigation in `src/components/Header.js`

### Security Settings
- Adjust session timeout in `src/context/SecurityContext.js`
- Modify security headers in `public/index.html`
- Update CSP policies as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size with code splitting
- Lazy loading for better initial load times
- Efficient state management with React Context
- CSS optimizations for smooth animations

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- High contrast support

## Troubleshooting

### Common Issues

1. **Security warnings in development**
   - These are expected in development mode
   - Production builds will have proper security measures

2. **Email verification not working**
   - Check browser console for errors
   - Ensure email service is properly configured
   - Verify OTP generation logic

3. **Content still copyable**
   - Some browsers may bypass certain restrictions
   - Consider additional server-side protection for critical content

### Development Tips

- Use browser developer tools to test security measures
- Test on multiple browsers and devices
- Verify accessibility with screen readers
- Check performance with Lighthouse

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## Security Considerations

⚠️ **Important**: This application provides client-side security measures. For production use with highly sensitive content, consider implementing additional server-side security measures:

- Server-side content rendering
- API-based content delivery
- Watermarking and fingerprinting
- Advanced encryption
- Rate limiting and access logging

The current implementation is suitable for:
- Educational content protection
- Business presentations
- Internal documentation
- Marketing materials
- General content security needs

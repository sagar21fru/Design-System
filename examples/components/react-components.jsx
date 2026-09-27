// Real Estate Design System - React Components
// Import the design system tokens in your _app.js or layout:
// import '../../tokens/all-tokens.css'
// import './components.css'

import React from 'react';

// Button Component
export const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
export const Card = ({ title, children, footer }) => {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h3 className="heading-s card-title">{title}</h3>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

// Property Card Component
export const PropertyCard = ({
  price,
  title,
  location,
  beds,
  baths,
  sqft,
  status,
  image,
  onClick
}) => {
  const statusColors = {
    new: 'info',
    available: 'success',
    pending: 'warning',
    sold: 'error'
  };

  return (
    <div className="property-card" onClick={onClick}>
      <img src={image} alt={title} className="property-image" />
      <div className="property-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <h4 className="heading-m property-price">{price}</h4>
          {status && <Badge variant={statusColors[status]}>{status}</Badge>}
        </div>
        <h3 className="heading-s">{title}</h3>
        <p className="property-location text-s">📍 {location}</p>
        <div className="property-features">
          <span className="feature">🛏️ {beds} Beds</span>
          <span className="feature">🛁 {baths} Baths</span>
          <span className="feature">📐 {sqft} sqft</span>
        </div>
      </div>
    </div>
  );
};

// Badge Component
export const Badge = ({ children, variant = 'info' }) => {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
    </span>
  );
};

// Input Component
export const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  ...props
}) => {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label} {required && <span style={{ color: 'var(--red-500)' }}>*</span>}
        </label>
      )}
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </div>
  );
};

// Select Component
export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  required = false,
  ...props
}) => {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label} {required && <span style={{ color: 'var(--red-500)' }}>*</span>}
        </label>
      )}
      <select
        className="select"
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Alert Component
export const Alert = ({ children, variant = 'info', onClose }) => {
  return (
    <div className={`alert alert-${variant}`}>
      <div style={{ flex: 1 }}>{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: 'inherit'
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

// Navbar Component
export const Navbar = ({ brand, links }) => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-brand">{brand}</a>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={`nav-link ${link.active ? 'active' : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Hero Component
export const Hero = ({ title, subtitle, onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="hero">
      <h1 className="heading-5xl hero-title">{title}</h1>
      <p className="text-xl hero-subtitle">{subtitle}</p>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by location, property type, or price..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

// Grid Component
export const Grid = ({ children, columns = 3 }) => {
  return (
    <div className={`grid grid-${columns}`}>
      {children}
    </div>
  );
};

// Container Component
export const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

// Example Usage:
/*
import {
  Button,
  PropertyCard,
  Navbar,
  Hero,
  Grid,
  Container
} from './components/react-components';

function App() {
  const properties = [
    {
      price: 'AED 1,250,000',
      title: 'Luxury Marina Apartment',
      location: 'Dubai Marina, Dubai',
      beds: 3,
      baths: 2,
      sqft: '1,500',
      status: 'new',
      image: '/property1.jpg'
    },
    // ... more properties
  ];

  return (
    <>
      <Navbar
        brand="Real Estate"
        links={[
          { label: 'Home', href: '/', active: true },
          { label: 'Properties', href: '/properties' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ]}
      />

      <Hero
        title="Find Your Dream Home"
        subtitle="Discover the perfect property from our curated collection"
        onSearch={(query) => console.log('Searching:', query)}
      />

      <Container>
        <Grid columns={3}>
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              {...property}
              onClick={() => console.log('Clicked:', property.title)}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
*/

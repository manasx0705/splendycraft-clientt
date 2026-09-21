# SplendyCraft Admin Portal Specification

## Overview

You have full access to my website project folder.

### IMPORTANT

-   This task is **ONLY** for creating an independent admin portal.
-   This admin portal is **NOT** part of the customer-facing website.
-   The admin portal will be hosted on a completely different domain and
    will only be used internally by the business owner.
-   **Do NOT** modify the design language of the existing
    customer-facing website.
-   **Do NOT** redesign any existing pages.
-   **Do NOT** create a login system yet.
-   The admin portal should be directly accessible by opening its URL.
-   The only purpose of this portal is to manage products displayed on
    `products.html`.

------------------------------------------------------------------------

# Project Structure

The existing website already contains:

-   `index.html`
-   `products.html`
-   `product.html`
-   `shared.css`
-   `shared.js` (if required)

Refer to `shared.css` and reuse the existing design language,
typography, spacing, buttons, colors, cards, hover effects and overall
styling.

The admin portal should visually match the same premium design style.

------------------------------------------------------------------------

# Files to Create

Create two new HTML files:

## admin.html

Dashboard listing every product currently shown on `products.html`.

## add-product.html

Contains the complete product creation form.

------------------------------------------------------------------------

# Admin Dashboard

`admin.html` should contain:

-   Large **Add Product** button at the top.
-   Clicking it redirects to `add-product.html`.
-   Display every existing product below.
-   Every product card should display:
    -   Product Image
    -   Product Name
    -   Category
    -   Short Description
    -   Checkbox

Cards should match the styling of the existing website.

------------------------------------------------------------------------

# Remove Products

-   Each product contains a checkbox.
-   Initially no action buttons are visible.
-   Selecting one or more products displays a floating bottom action
    bar.

Buttons:

-   Remove
-   Cancel

### Remove

Display confirmation:

> Are you sure you want to permanently remove the selected product(s)?
>
> This action cannot be undone.

Buttons:

-   Cancel
-   Remove

Only after confirmation should deletion occur.

Deleted products must immediately disappear from `products.html`.

### Cancel

-   Hide floating action bar.
-   Deselect every checkbox.

------------------------------------------------------------------------

# Add Product Page

Create `add-product.html`.

Business owner fills normal form fields.

Never edit JSON manually.

Generate JSON automatically.

## Fields

-   id (auto-generated from product name)
-   name
-   category (dropdown with custom values)
-   shortDescription
-   longDescription
-   images (multiple upload, preview, drag & drop, delete)
-   material
-   dimensions
-   color
-   craftsmanship
-   care
-   availability

------------------------------------------------------------------------

# Product JSON Structure

``` json
{
  "id": "",
  "name": "",
  "category": "",
  "shortDescription": "",
  "longDescription": "",
  "images": [],
  "material": "",
  "dimensions": "",
  "color": "",
  "craftsmanship": "",
  "care": "",
  "availability": ""
}
```

------------------------------------------------------------------------

# Save Product

Buttons:

-   Save Product
-   Cancel

## Save Product

-   Validate required fields.
-   Generate JSON.
-   Automatically add product to `products.html`.
-   New product must use the exact existing HTML structure and CSS
    styling.

## Cancel

Return to `admin.html`.

------------------------------------------------------------------------

# Image Handling

Support:

-   Preview
-   Multiple upload
-   Maintain upload order
-   Correct relative paths
-   Immediate compatibility with `products.html`

------------------------------------------------------------------------

# Data Source

Do **NOT** hardcode products in multiple places.

Refactor `products.html` so products load from a single shared data
source.

Any add/remove/edit operation must update this source.

There must always be one source of truth.

------------------------------------------------------------------------

# Edit Product

Editing is available **only when exactly one product is selected**.

If one product is selected:

Floating action bar contains:

-   Edit
-   Remove
-   Cancel

If more than one product is selected:

Hide Edit.

Show only:

-   Remove
-   Cancel

------------------------------------------------------------------------

# Edit Workflow

Clicking **Edit** must **NOT** redirect.

Instead display a premium slide-up bottom sheet.

Requirements:

-   Smooth animation
-   Dark translucent backdrop
-   User remains inside dashboard
-   Occupies approximately 85--90% height
-   Full height on mobile if necessary

------------------------------------------------------------------------

# Edit Form

Automatically populate existing values.

Fields:

-   Product Name
-   Category
-   Short Description
-   Long Description
-   Material
-   Dimensions
-   Color
-   Craftsmanship
-   Care Instructions
-   Availability
-   Multiple Images

------------------------------------------------------------------------

# Image Editing

Allow:

-   Upload additional images
-   Remove images
-   Drag-and-drop reordering
-   Select primary thumbnail
-   Preview before saving

------------------------------------------------------------------------

# Save Changes

Buttons:

-   Save Changes
-   Cancel

## Save Changes

-   Validate fields
-   Update shared data source
-   Immediately update:
    -   products.html
    -   admin.html
    -   Individual product pages
    -   Search results
    -   Filters

No page refresh required.

## Cancel

Close bottom sheet and discard changes.

------------------------------------------------------------------------

# Animations

Use premium animations:

-   Slide up/down
-   Background fade
-   Smooth hover effects

Inspired by modern interfaces such as Google Drive, Notion and Apple
Sheets.

------------------------------------------------------------------------

# Validation

-   Validate required fields
-   Highlight missing fields
-   Prevent invalid saves
-   Display friendly validation messages

------------------------------------------------------------------------

# UX Goals

-   Fast
-   Premium
-   Intuitive
-   Maintain visual identity from `shared.css`
-   No manual code editing required

------------------------------------------------------------------------

# Expected Workflow

## Add Product

1.  Open `admin.html`
2.  Click **Add Product**
3.  Redirect to `add-product.html`
4.  Fill form
5.  Upload images
6.  Click **Save Product**
7.  Product appears on `products.html`
8.  Return to `admin.html`
9.  Dashboard shows new product

## Remove Product

1.  Select one or more products
2.  Floating action bar appears
3.  Click **Remove**
4.  Confirm deletion
5.  Product removed everywhere

## Edit Product

1.  Select exactly one product
2.  Floating action bar shows **Edit**
3.  Click **Edit**
4.  Bottom sheet slides up
5.  Modify information
6.  Save Changes
7.  Updates immediately propagate throughout the website

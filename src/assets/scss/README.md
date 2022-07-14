# Use a theme color

    color("value")

## Exemples

    // SCSS
    p {
        color: color("primary");
    }

    // Output CSS
    p {
        color: #2f2c7d;
    }

# Use a media querie

    @media #{$value}

## Exemples

    // SCSS
    @media #{$md-and-up} {
        display: flex;
    }

    // Output CSS
    @media only screen and (min-width : 769px)" {
        display: flex;
    }

# Use a shadow

    get($shadows, "value")

## Exemples

    // SCSS
    div {
        box-shadow: get($shadows, "light");
    }

    // Output CSS
    div {
        box-shadow: 19px 19px 38px rgba(0, 0, 0, 0.1);
    }

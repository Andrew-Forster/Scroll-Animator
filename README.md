# Scroll-Animator
Similar to the AOS library however less complicated and more simple! Adjustments will be made in the future. Refer to the readme.

## Installation:

## Usage:
After installing SA, to use it, just call any of these class names!

### Animation Styles:
- **sa**:

Slides object in from the left
``` html
<div class="sa"></div>
```

- **sa-right**:

Slides object in from the right
``` html
<div class="sa-right"></div>
```

- **sa-zoom**:

Zooms in object
``` html
<div class="sa-zoom"></div>
```

- **sa-flip**:

Flips object
``` html
<div class="sa-flip"></div>
```

### Duration:

**sa-duration{time}**
``` html
<div class="sa sa-duration0_1"></div>
```

Time options Include:
- 0_1 - 0_9
- 1
- 1_5
- 2
- 2_5

Etc, up until 5 seconds.

Duration increments by seconds, the underscore is substituted for a dot. 


### Delay:

**sa-delay{time}**
``` html
<div class="sa sa-delay0_4></div>
```

Time options Include:
- 0_1 - 0_9
- 1
- 1_5
- 2
- 2_5

Etc, up until 5 seconds.

Delay increments by seconds, the underscore is substituted for a dot. 

### Easing:


- **sa-easeinout**

``` html
<div class="sa sa-easeinout"></div>
```

- **sa-easein**

``` html
<div class="sa sa-easein"></div>
```

- **sa-easeout**

``` html
<div class="sa sa-easeout"></div>
```

- **sa-ease**

``` html
<div class="sa sa-ease"></div>
```

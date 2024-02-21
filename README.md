# Scroll-Animator
Similar to the AOS library however less complicated and more simple! Adjustments will be made in the future. Refer to the readme.

## Installation:
Place both within your head tag:

``` html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/sup3r0001/Scroll-Animator@latest/Scroll%20Animator/scrollanimator.css">
```

``` html
<script src="https://cdn.jsdelivr.net/gh/sup3r0001/Scroll-Animator@latest/Scroll%20Animator/scrollanimator.js"></script>
```

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

Time format: {second}_{millisecond}

MIN: 0_1s

MAX: 15s

*The underscore is substituted for a dot.* 


### Delay:

**sa-delay{time}**
``` html
<div class="sa sa-delay0_4></div>
```

Time format: {second}_{millisecond}

MIN: 0_1s

MAX: 15s

*The underscore is substituted for a dot.* 

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


## ON-LOAD Shift

- **onload_shift**:

Slides object in from the left with a bounce
``` html
<div class="onload_shift"></div>
```

- **onload_shift_delay{time}**:

Slides object in from the left with a bounce and a delay.
``` html
<div class="onload_shift_delay5-5"></div>
```

Time format: {second}-{millisecond}

MIN: 0-1s

MAX: 15s

*The hyphen is substituted for a dot.* 


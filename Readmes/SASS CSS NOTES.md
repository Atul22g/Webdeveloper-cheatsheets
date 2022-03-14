# SASS CSS NOTES

## INSTALLING

1. npm install -g sass
2. LIVE SAAS COMPILER WIDGET for VSCODE
3. [VISIT FOR MORE INFO](https://sass-lang.com/install)

---

## VARIABLES

### EXAMPLES

```
$list-border: solid 3px $primary-color;
$primary-color:red;
p{
color:$primary-color;
border: $list-border;
}
```

## MAP USAGE

```
$margin-map(m1:1rem, m2:2rem, m3:3rem);
li {
margin:map-get($margin-map,m1);
}
```

## & USAGE

```
li {
color:$primary-color;
&:hover{
color:white;
}
}
```

## MIXIN USAGE

MIXIN USED FOR NESTED SFECIFIC CONTENT a ELEMENT EXC.

```
@mixin main-a($mcolor: red, $hcolor: black) {
text-decoration: none;
color: $mcolor;
&:hover {
color: $hcolor;
}
}

a{
@include main-a(navy, white);
}
```
## EXTEND USAGE

IT IS MORE USEFUL THEN MIXIN
### SCSS file:
```

%button-format {
    padding: 10px 20px;
    border-radius: 15px;
    color: black;
}
  
.toolbar-button {
    @extend %button-format;
    background-color: lightpink;
  
    &:hover {
        background-color: rgb(155, 106, 114);
    }
}
  
.status-bar-button {
    @extend %button-format;
    background-color: lightblue;
  
    &:hover {
        background-color: blue;
    }
}
```
### CSS EXPORT
```
.status-bar-button, .toolbar-button {
  padding: 10px 20px;
  border-radius: 15px;
  color: black;
}

.toolbar-button {
  background-color: lightpink;
}
.toolbar-button:hover {
  background-color: #9b6a72;
}

.status-bar-button {
  background-color: lightblue;
}
.status-bar-button:hover {
  background-color: blue;
}
```

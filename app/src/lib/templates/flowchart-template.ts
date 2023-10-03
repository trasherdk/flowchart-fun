const content = `
Brainstorming Session
  Prototyping
    Prototype Evaluation
      Yes: Design .color_blue
        Testing
      No: Review .color_green
        Quick Design .color_green
          (Prototyping)
Trends
  (Prototyping)
Research
  (Prototyping)
`;

const template = `=====
{
"cytoscapeStyle": "@import url(\\"https://fonts.googleapis.com/css2?family=REM&display=swap\\");\\n\\n$background: #f0f3f5;\\n$color: #1a1a1a;\\n$fontFamily: \\"REM\\", sans-serif;\\n$red: #ed6e49;\\n$orange: #f4a261;\\n$yellow: #f5c844;\\n$green: #11ac9a;\\n$blue: #4351d1;\\n$pink: #f5c3c2;\\n$grey: #f2eded;\\n\\nedge {\\n  width: 2px;\\n  curve-style: bezier;\\n  target-arrow-shape: vee;\\n  arrow-scale: 1.5;\\n  line-color: #5a5a5a;\\n  source-arrow-color: #5a5a5a;\\n  target-arrow-color: #5a5a5a;\\n  label: data(label);\\n  text-background-color: $background;\\n  text-background-opacity: 1;\\n  text-background-padding: 5;\\n  font-family: $fontFamily;\\n  font-size: 14;\\n}\\n\\n:childless[shapeWidth] {\\n  width: data(shapeWidth);\\n}\\n\\n:childless[shapeHeight] {\\n  height: data(shapeHeight);\\n}\\n\\n:childless[textMarginY] {\\n  text-margin-y: data(textMarginY);\\n}\\n\\n:childless[textMarginX] {\\n  text-margin-x: data(textMarginX);\\n}\\n\\n:childless {\\n  label: data(label);\\n  font-family: $fontFamily;\\n  text-wrap: wrap;\\n  text-max-width: 150;\\n  width: 200;\\n  height: 100;\\n  font-size: 16;\\n  text-valign: center;\\n  text-halign: center;\\n  line-height: 1.4;\\n  shape: rectangle;\\n  background-color: $yellow;\\n  color: $color;\\n  border-width: 0;\\n  font-weight: 500;\\n}\\n\\n/** Start */\\n:childless[in_degree < 1][out_degree > 0] {\\n  border-width: 0;\\n  shape: roundrectangle;\\n  background-color: $color;\\n  color: white;\\n}\\n\\n/** Terminal */\\n:childless[out_degree < 1][in_degree > 0] {\\n  border-width: 0;\\n  shape: roundrectangle;\\n  background-color: $color;\\n  color: white;\\n}\\n\\n/** Branching */\\n:childless[in_degree > 0][in_degree < 2][out_degree > 1] {\\n  shape: diamond;\\n  background-color: $red;\\n  color: white;\\n  height: 200;\\n  border-width: 0;\\n  text-margin-y: 2;\\n}\\n\\n/** Merging **/\\n:childless[in_degree > 1][out_degree > 0][out_degree < 2] {\\n}\\n\\n:childless.color_red {\\n  background-color: $red;\\n  color: white;\\n}\\n:childless.color_orange {\\n  background-color: $orange;\\n  color: white;\\n}\\n:childless.color_yellow {\\n  background-color: $yellow;\\n}\\n:childless.color_green {\\n  background-color: $green;\\n  color: white;\\n}\\n:childless.color_blue {\\n  background-color: $blue;\\n  color: white;\\n}\\n:childless.color_pink {\\n  background-color: $pink;\\n  color: $color;\\n}\\n:childless.color_grey {\\n  background-color: $grey;\\n}\\n\\n:childless.shape_rectangle {\\n  shape: rectangle;\\n}\\n:childless.shape_roundrectangle {\\n  shape: roundrectangle;\\n}\\n:childless.shape_ellipse {\\n  shape: ellipse;\\n}\\n:childless.shape_triangle {\\n  shape: triangle;\\n}\\n:childless.shape_pentagon {\\n  shape: pentagon;\\n}\\n:childless.shape_hexagon {\\n  shape: hexagon;\\n}\\n:childless.shape_heptagon {\\n  shape: heptagon;\\n}\\n:childless.shape_octagon {\\n  shape: octagon;\\n}\\n:childless.shape_star {\\n  shape: star;\\n}\\n:childless.shape_barrel {\\n  shape: barrel;\\n}\\n:childless.shape_diamond {\\n  shape: diamond;\\n}\\n:childless.shape_vee {\\n  shape: vee;\\n}\\n:childless.shape_rhomboid {\\n  shape: rhomboid;\\n}\\n:childless.shape_right-rhomboid {\\n  shape: right-rhomboid;\\n}\\n:childless.shape_tag {\\n  shape: tag;\\n}\\n:childless.shape_round-rectangle {\\n  shape: round-rectangle;\\n}\\n:childless.shape_cut-rectangle {\\n  shape: cut-rectangle;\\n}\\n:childless.shape_bottom-round-rectangle {\\n  shape: bottom-round-rectangle;\\n}\\n:childless.shape_concave-hexagon {\\n  shape: concave-hexagon;\\n}\\n:childless.border_none {\\n  border-width: 0;\\n  border-style: solid;\\n}\\n:childless.border_solid {\\n  border-width: 2;\\n  border-style: solid;\\n}\\n:childless.border_dashed {\\n  border-width: 2;\\n  border-style: dashed;\\n}\\n:childless.border_dotted {\\n  border-width: 2;\\n  border-style: dotted;\\n}\\n\\n:childless[w] {\\n  width: data(w);\\n}\\n\\n:childless[h] {\\n  height: data(h);\\n}\\n\\nedge.line_solid {\\n  line-style: solid;\\n}\\nedge.line_dotted {\\n  line-style: dotted;\\n}\\nedge.line_dashed {\\n  line-style: dashed;\\n}\\nedge.target-arrow_triangle {\\n  target-arrow-shape: triangle;\\n}\\nedge.target-arrow_triangle-tee {\\n  target-arrow-shape: triangle-tee;\\n}\\nedge.target-arrow_circle-triangle {\\n  target-arrow-shape: circle-triangle;\\n}\\nedge.target-arrow_triangle-cross {\\n  target-arrow-shape: triangle-cross;\\n}\\nedge.target-arrow_triangle-backcurve {\\n  target-arrow-shape: triangle-backcurve;\\n}\\nedge.target-arrow_vee {\\n  target-arrow-shape: vee;\\n}\\nedge.target-arrow_tee {\\n  target-arrow-shape: tee;\\n}\\nedge.target-arrow_square {\\n  target-arrow-shape: square;\\n}\\nedge.target-arrow_circle {\\n  target-arrow-shape: circle;\\n}\\nedge.target-arrow_diamond {\\n  target-arrow-shape: diamond;\\n}\\nedge.target-arrow_chevron {\\n  target-arrow-shape: chevron;\\n}\\nedge.target-arrow_none {\\n  target-arrow-shape: none;\\n}\\nedge.source-arrow_triangle {\\n  source-arrow-shape: triangle;\\n}\\nedge.source-arrow_triangle-tee {\\n  source-arrow-shape: triangle-tee;\\n}\\nedge.source-arrow_circle-triangle {\\n  source-arrow-shape: circle-triangle;\\n}\\nedge.source-arrow_triangle-cross {\\n  source-arrow-shape: triangle-cross;\\n}\\nedge.source-arrow_triangle-backcurve {\\n  source-arrow-shape: triangle-backcurve;\\n}\\nedge.source-arrow_vee {\\n  source-arrow-shape: vee;\\n}\\nedge.source-arrow_tee {\\n  source-arrow-shape: tee;\\n}\\nedge.source-arrow_square {\\n  source-arrow-shape: square;\\n}\\nedge.source-arrow_circle {\\n  source-arrow-shape: circle;\\n}\\nedge.source-arrow_diamond {\\n  source-arrow-shape: diamond;\\n}\\nedge.source-arrow_chevron {\\n  source-arrow-shape: chevron;\\n}\\nedge.source-arrow_none {\\n  source-arrow-shape: none;\\n}\\n\\n:parent {\\n  padding: 10;\\n  border-style: solid;\\n  border-width: 2;\\n  border-color: $color;\\n  background-color: $background;\\n  text-valign: top;\\n  font-family: $fontFamily;\\n  label: data(label);\\n  color: $color;\\n  font-size: 19.5px;\\n  text-margin-y: -5;\\n}\\n\\n:parent.color_white {\\n  background-color: white;\\n}\\n:parent.color_grey {\\n  background-color: $grey;\\n}\\n",
"layout": {
  "name": "dagre",
  "spacingFactor": 1.05
}
}
=====`;

export { content, template };
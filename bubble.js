var mapwidth=800
var mapheight=680
var years = [189, 196, 200, 208, 214, 220, 263, 266, 280]
var yearmax = years[years.length-1] + 2
var yearmin = years[0]-2

/* Define d3 forcex and forcey, not sure how to add math format into the forceX()*/
var forcex189 = d3.forceX(function(d){
  if(d.emperor189 === '1') {
          return 10*mapwidth/16-mapwidth/2}
  if(d.emperor189 === "2") {
          return 23*mapwidth/32-mapwidth/2}
  if(d.emperor189 === '3') {
          return 19*mapwidth/32-mapwidth/2}
  if(d.emperor189 === '4') {
          return 11*mapwidth/16-mapwidth/2}
  if(d.emperor189 === '5') {
          return 3*mapwidth/8-mapwidth/2}
  if(d.emperor189 === "6") {
          return 9*mapwidth/16-mapwidth/2}
  if(d.emperor189 === '7') {
          return 9*mapwidth/16-mapwidth/2}
  if(d.emperor189 === "8") {
          return 5*mapwidth/16-mapwidth/2}
  if(d.emperor189 === "10") {
          return 11*mapwidth/16-mapwidth/2}
  if(d.emperor189 === "11") {
          return 9*mapwidth/16-mapwidth/2}
  if(d.emperor189 === "12") {
          return 5*mapwidth/8-mapwidth/2}
  else{return 3*mapwidth/8-mapwidth/2}}).strength(.2)
var forcey189 = d3.forceY(function(d){
  if(d.emperor189 === '1') {
      return 6*mapheight/16-mapheight/2}
  if(d.emperor189 === "2") {
      return 9*mapheight/32-mapheight/2}
  if(d.emperor189 === "3") {
      return 21*mapheight/32-mapheight/2}
  if(d.emperor189 === "4") {
      return 4*mapheight/16-mapheight/2}
  if(d.emperor189 === "5") {
      return 3*mapheight/8-mapheight/2}
  if(d.emperor189 === "6") {
      return 1*mapheight/2-mapheight/2}
  if(d.emperor189 === "7") {
      return 13*mapheight/32-mapheight/2}
  if(d.emperor189 === "8") {
      return 9*mapheight/16-mapheight/2}
  if(d.emperor189 === "10") {
      return 3*mapheight/16-mapheight/2}
  if(d.emperor189 === "11") {
      return 15*mapheight/32-mapheight/2}
  if(d.emperor189 === "12") {
      return 9*mapheight/32-mapheight/2}
  else{return 31*mapheight/32-mapheight/2}}).strength(.2)
var forcex196 = d3.forceX(function(d){
  if(d.emperor196 === '1') {
    return 21*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "2") {
    return 23*mapwidth/32-mapwidth/2}
  if(d.emperor196 === '3') {
    return 28*mapwidth/32-mapwidth/2}
  if(d.emperor196 === '4') {
    return 21*mapwidth/32-mapwidth/2}
  if(d.emperor196 === '5') {
    return 12*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "6") {
    return 19*mapwidth/32-mapwidth/2}
  if(d.emperor196 === '7') {
    return 15*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "8") {
    return 10*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "9") {
    return 14*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "10") {
    return 22*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "11") {
    return 23*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "12") {
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor196 === "14") {
    return 25*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey196 = d3.forceY(function(d){
  if(d.emperor196 === '1') {
    return 13*mapheight/32-mapheight/2}
  if(d.emperor196 === "2") {
    return 14*mapheight/32-mapheight/2}
  if(d.emperor196 === "3") {
    return 19*mapheight/32-mapheight/2}
  if(d.emperor196 === "4") {
    return 8*mapheight/32-mapheight/2}
  if(d.emperor196 === "5") {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor196 === "6") {
    return 17*mapheight/32-mapheight/2}
  if(d.emperor196 === "7") {
    return 13*mapheight/32-mapheight/2}
  if(d.emperor196 === "8") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor196 === "9") {
    return 15*mapheight/32-mapheight/2}
  if(d.emperor196 === "10") {
    return 5*mapheight/32-mapheight/2}
  if(d.emperor196 === "11") {
    return 16*mapheight/32-mapheight/2}
  if(d.emperor196 === "12") {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor196 === "14") {
    return 13*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.2)
var forcex200 = d3.forceX(function(d){
  if(d.emperor200 === '1') {
    return 22*mapwidth/32-mapwidth/2}
  if(d.emperor200 === "2") {
    return 21*mapwidth/32-mapwidth/2}
  if(d.emperor200 === '3') {
    return 27*mapwidth/32-mapwidth/2}
  if(d.emperor200 === '4') {
    return 21*mapwidth/32-mapwidth/2}
  if(d.emperor200 === '5') {
      return 12*mapwidth/32-mapwidth/2}
  if(d.emperor200 === "6") {
    return 18*mapwidth/32-mapwidth/2}
  if(d.emperor200 === '7') {
    return 15*mapwidth/32-mapwidth/2}
  if(d.emperor200 === "8") {
    return 10*mapwidth/32-mapwidth/2}
  if(d.emperor200 === "9") {
    return 14*mapwidth/32-mapwidth/2}
  if(d.emperor200 === "10") {
    return 22*mapwidth/32-mapwidth/2}
  if(d.emperor200 === "11") {
    return 23*mapwidth/32-mapwidth/2}
  if(d.emperor200 === "14") {
    return 23*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey200 = d3.forceY(function(d){
  if(d.emperor200 === '1') {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor200 === "2") {
    return 15*mapheight/32-mapheight/2}
  if(d.emperor200 === "3") {
    return 17*mapheight/32-mapheight/2}
  if(d.emperor200 === "4") {
    return 8*mapheight/32-mapheight/2}
  if(d.emperor200 === "5") {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor200 === "6") {
    return 17*mapheight/32-mapheight/2}
  if(d.emperor200 === "7") {
    return 13*mapheight/32-mapheight/2}
  if(d.emperor200 === "8") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor200 === "9") {
    return 15*mapheight/32-mapheight/2}
  if(d.emperor200 === "10") {
    return 5*mapheight/32-mapheight/2}
  if(d.emperor200 === "11") {
    return 16*mapheight/32-mapheight/2}
  if(d.emperor200 === "14") {
    return 14*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.4)
var forcex208 = d3.forceX(function(d){
  if(d.emperor208 === '1') {
    return 19*mapwidth/32-mapwidth/2}
  if(d.emperor208 === "2") {
    return 22*mapwidth/32-mapwidth/2}
  if(d.emperor208 === '3') {
    return 23*mapwidth/32-mapwidth/2}
  if(d.emperor208 === '4') {
    return 28*mapwidth/32-mapwidth/2}
  if(d.emperor208 === '5') {
      return 12*mapwidth/32-mapwidth/2}
  if(d.emperor208 === "6") {
    return 18*mapwidth/32-mapwidth/2}
  if(d.emperor208 === "8") {
    return 10*mapwidth/32-mapwidth/2}
  if(d.emperor208 === "9") {
    return 14*mapwidth/32-mapwidth/2}
  if(d.emperor208 === "14") {
    return 23*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.4)
var forcey208 = d3.forceY(function(d){
  if(d.emperor208 === '1') {
    return 13*mapheight/32-mapheight/2}
  if(d.emperor208 === "2") {
    return 19*mapheight/32-mapheight/2}
  if(d.emperor208 === "3") {
    return 20*mapheight/32-mapheight/2}
  if(d.emperor208 === "4") {
    return 2*mapheight/32-mapheight/2}
  if(d.emperor208 === "5") {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor208 === "6") {
    return 17*mapheight/32-mapheight/2}
  if(d.emperor208 === "8") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor208 === "9") {
    return 15*mapheight/32-mapheight/2}
  if(d.emperor208 === "14") {
    return 14*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.2)
var forcex214 = d3.forceX(function(d){
  if(d.emperor214 === '1') {
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor214 === "2") {
    return 11*mapwidth/32-mapwidth/2}
  if(d.emperor214 === '3') {
    return 26*mapwidth/32-mapwidth/2}
  if(d.emperor214 === '5') {
      return 10*mapwidth/32-mapwidth/2}
  if(d.emperor214 === "8") {
    return 18*mapwidth/32-mapwidth/2}
  if(d.emperor214 === "9") {
    return 14*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey214 = d3.forceY(function(d){
  if(d.emperor214 === '1') {
    return 10*mapheight/32-mapheight/2}
  if(d.emperor214 === "2") {
    return 9*mapheight/16-mapheight/2}
  if(d.emperor214 === "3") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor214 === "5") {
    return 10*mapheight/32-mapheight/2}
  if(d.emperor214 === "8") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor214 === "9") {
    return 15*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.2)
var forcex220 = d3.forceX(function(d){
  if(d.emperor220 === '1') {
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor220 === "2") {
    return 11*mapwidth/32-mapwidth/2}
  if(d.emperor220 === '3') {
    return 21*mapwidth/32-mapwidth/2}
  if(d.emperor220 === '5') {
      return 8*mapwidth/32-mapwidth/2}
  if(d.emperor220 === "9") {
    return 14*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey220 = d3.forceY(function(d){
  if(d.emperor220 === '1') {
    return 10*mapheight/32-mapheight/2}
  if(d.emperor220 === "2") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor220 === "3") {
    return 19*mapheight/32-mapheight/2}
  if(d.emperor220 === "5") {
    return 4*mapheight/32-mapheight/2}
  if(d.emperor220 === "9") {
    return 15*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.4)
var forcex263 = d3.forceX(function(d){
  if(d.emperor263 === '1') {
    return 16*mapwidth/32-mapwidth/2}
  if(d.emperor263 === "2") {
    return 10*mapwidth/32-mapwidth/2}
  if(d.emperor263 === '3') {
    return 26*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey263 = d3.forceY(function(d){
  if(d.emperor263 === '1') {
    return 14*mapheight/32-mapheight/2}
  if(d.emperor263 === "2") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor263 === "3") {
    return 18*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.2)
var forcex266 = d3.forceX(function(d){
    if(d.emperor266 === '15') {
      return 16*mapwidth/32-mapwidth/2}
    if(d.emperor266 === "2") {
      return 10*mapwidth/32-mapwidth/2}
    if(d.emperor266 === '3') {
      return 26*mapwidth/32-mapwidth/2}
    else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey266 = d3.forceY(function(d){
    if(d.emperor266 === '15') {
      return 14*mapheight/32-mapheight/2}
    if(d.emperor266 === "2") {
      return 18*mapheight/32-mapheight/2}
    if(d.emperor266 === "3") {
      return 18*mapheight/32-mapheight/2}
    else{return 28*mapheight/32-mapheight/2}}).strength(.2)
var forcex280 = d3.forceX(function(d){
  if(d.emperor280 === '1') {
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor280 === '3') {
    return 27*mapwidth/32-mapwidth/2}
  else{return 17*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey280 = d3.forceY(function(d){
  if(d.emperor280 === '1') {
    return 10*mapheight/32-mapheight/2}
  if(d.emperor280 === "3") {
    return 17*mapheight/32-mapheight/2}
  else{return 16*mapheight/32-mapheight/2}}).strength(.2)

/* Define svg size*/
d3.select("svg")
 .attr("width", mapwidth)
 .attr("height", mapheight)

/* Define bubble size and color*/
var scaleRadius = d3.scaleSqrt().domain([0,60]).range([0,72])
var color = d3.scaleOrdinal(["#6E7378", "#DD6776", "#EDAE33", "#B07D95", "#869CA8", "#957C8C", "#578EC1", "#6BBEC9", "#A0A0A0","#9BAF82", "#CFCB5F", "#DFAB86","#709D98", "#88AA94","#938EB6"])

/* Define d3 force*/
var simulation = d3.forceSimulation()
  .velocityDecay(0.4)
  .force("forceX", forcex189)
  .force("forceY", forcey189)
  .force("collide", d3.forceCollide().iterations(10).radius(function(d){
    return scaleRadius(d.power189)+1}))
  .alphaTarget(0.2).restart()

/* Define drag behavior*/
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(.03).restart();
  d.fx = d.x;
  d.fy = d.y;
  d3.select(".tooltip")
  .style("opacity", 0)}
function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
  d3.select(".tooltip")
  .style("opacity", 0)}
function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(.03);
  d.fx = null;
  d.fy = null;
  d3.select(".tooltip")
  .style("opacity", 0)}

d3.csv("sanguo.csv").then(drawCircle)

/* Create bubbles*/
function drawCircle(clients) {
  var circles = d3.select("svg").selectAll("circle").data(clients).enter()
  .append("circle")
  .attr("r", function(d){return scaleRadius(d.power189)})
  .attr("fill", function(d){return color(d.emperor189)})
  .attr("stroke", "#F9F6EF")
  .attr("stroke-width", 2)
  .attr('transform', 'translate(' + [mapwidth/2, mapheight/2] + ')')/* Somehow the cx, cy didn't work, might conflict with the forceX/Y.*/
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended))
  .on('click', function(d){
		console.log(d)})
  .on('mouseover', showtooltip)
  .on("mousemove",movetooltip)
  .on("mouseout",removetooltip)

  d3.select("h3")
  .text("诸侯讨董")
  d3.select("p")
  .text("中平六年（189年），董卓废嫡立庶，残暴专权。袁绍，曹操等中央官员联合关东群雄，于初平元年（190年）组成讨董联军，进军洛阳。董卓随后胁迫天子，迁都长安，火烧洛阳。讨董联军虽然声势浩大，但各方诸侯惧怕董卓，各自保存实力。伴随着一系列的内讧，讨董联盟于初平二年（191年）瓦解。")


  /* Animation Starts from here*/
  d3.select("#circle0").on('click', function() {
    console.log("hellohello189")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power189)})
    .attr("fill", function(d){return color(d.emperor189)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("诸侯讨董")
    d3.select("p")
    .text("中平六年（189年），董卓废嫡立庶，残暴专权。袁绍，曹操等中央官员联合关东群雄，于初平元年（190年）组成讨董联军，进军洛阳。董卓随后胁迫天子，迁都长安，火烧洛阳。讨董联军虽然声势浩大，但各方诸侯惧怕董卓，各自保存实力。伴随着一系列的内讧，讨董联盟于初平二年（191年）瓦解。")

    simulation
      .force("forceX", forcex189)
      .force("forceY", forcey189)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power189)+1}))
      .alphaTarget(0.2).restart()
  })
  d3.select("#circle1").on('click', function() {
    console.log("hellohello196")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power196)})
    .attr("fill", function(d){return color(d.emperor196)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("群雄逐鹿")
    d3.select("p")
    .text("讨董联盟瓦解之后，占据兖州的曹操听从部下建议，迎接逃亡的汉献帝，并协助朝廷迁都许县。中央对地方的控制愈发微弱，各方诸强相互征伐，群雄逐鹿的时代开始。")

    simulation
      .force("forceX", forcex196)
      .force("forceY", forcey196)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power196)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle2").on('click', function() {
    console.log("hellohello200")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power200)})
    .attr("fill", function(d){return color(d.emperor200)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("官渡之战")
    d3.select("p")
    .text("曹操奉天子以令不臣，势力急剧扩张，先后占据了兖州、徐州、司隶以及豫州、扬州部分地区。袁绍在打败公孙瓒之后坐拥幽州、冀州、青州、并州之众，北连乌桓，意欲南向以争天下。建安五年（200年），曹操军与袁绍军相持于官渡，在此展开战略决战。曹操奇袭袁军在乌巢的粮仓，继而击溃袁军主力。此战奠定了曹操统一中国北方的基础。")

    simulation
      .force("forceX", forcex200)
      .force("forceY", forcey200)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power200)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle3").on('click', function() {
    console.log("hellohello208")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power208)})
    .attr("fill", function(d){return color(d.emperor208)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("赤壁之战")
    d3.select("p")
    .text("建安十三年（208年），基本控制北方的曹操率大军南下荆州，荆州牧刘琮投降。寄身荆州的刘备逃亡江夏，与江东孙权协议结盟。孙刘联军在赤壁大破曹军，曹操落荒北回。此战后，曹孙刘三分荆州，三国鼎立的雏形由此建立。")

    simulation
      .force("forceX", forcex208)
      .force("forceY", forcey208)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power208)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle4").on('click', function() {
    console.log("hellohello214")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power214)})
    .attr("fill", function(d){return color(d.emperor214)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("刘备入蜀")
    d3.select("p")
    .text("赤壁之战后，刘备以占据荆南五郡，受益州牧刘璋邀请，入蜀攻打张鲁，抵御曹操。建安十七年（212年），刘璋与刘备决裂并发动战争。建安十九年（214年），刘备围困成都，刘璋投降。刘备自此夺得益州，实现了诸葛亮隆中对中「跨有荆、益」的战略规划。")

    simulation
      .force("forceX", forcex214)
      .force("forceY", forcey214)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power214)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle5").on('click', function() {
    console.log("hellohello220")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power220)})
    .attr("fill", function(d){return color(d.emperor220)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("三国鼎立")
    d3.select("p")
    .text("延康元年（220年），曹操之子曹丕逼迫汉献帝禅让帝位，登基称帝。接下来的数年内，西蜀刘备与东吴孙权相继称帝，魏蜀吴三国鼎立的时代开始。")

    simulation
      .force("forceX", forcex220)
      .force("forceY", forcey220)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power220)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle6").on('click', function() {
    console.log("hellohello263")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power263)})
    .attr("fill", function(d){return color(d.emperor263)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("曹魏灭蜀")
    d3.select("p")
    .text("蜀汉建立后，经过一系列的北伐，国力日渐消耗，后主刘禅宠信宦官，朝政日非。263年，曹魏三路大军进军蜀汉。最终邓艾率精兵偷渡阴平攻占涪城，进逼成都。汉后主刘禅出降，蜀汉灭亡。")

    simulation
      .force("forceX", forcex263)
      .force("forceY", forcey263)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power263)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle7").on('click', function() {
    console.log("hellohello266")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power266)})
    .attr("fill", function(d){return color(d.emperor266)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("司马炎篡魏")
    d3.select("p")
    .text("司马昭死后，其子司马炎继承相国晋王位，掌握全国军政大权。经过精心准备，魏咸熙二年（266年2月8日），司马炎仿效当年曹丕篡汉的故事，逼迫魏元帝禅让，即位为帝。魏国灭亡，而晋朝154年的国祚由此展开。")

    simulation
      .force("forceX", forcex266)
      .force("forceY", forcey266)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power266)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle8").on('click', function() {
    console.log("hellohello280")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power280)})
    .attr("fill", function(d){return color(d.emperor280)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("天下归一")
    d3.select("p")
    .text("279年，晋武帝司马炎大举伐吴，二十万晋军兵分六路直指建业，此时吴国内部矛盾重重，人心离散，再加上双方势力悬殊。战后不久，吴国各地守军便陆续向晋军归降。280年5月，吴主孙皓正式投降，晋国成功统一全国，结束自东汉未年以来群雄割据的分裂局面。")

    simulation
      .force("forceX", forcex280)
      .force("forceY", forcey280)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power280)+1}))
      .alphaTarget(0.2).restart()

  })
  simulation.nodes(clients)
  .on('tick', ticked)
  function ticked() {
    circles
    .attr("cx", function(d){ return d.x; })
    .attr("cy", function(d){ return d.y; })}
}

/* Tooltip*/
function showtooltip(d){
  d3.select(".tooltip")
  .style("opacity", 1)
  d3.select("img")
  .attr("src",d.image)
  d3.select(".name")
  .text(d.name)
  d3.select(".stylename")
  .text("字" + d.stylename)
  d3.select(".life")
  .text(d.life)}
function movetooltip(d){
  d3.select(".tooltip")
  .style("left", (d3.event.pageX +20) + "px")
  .style("top", (d3.event.pageY-160) + "px")}
function removetooltip(d){
  d3.select(".tooltip")
  .style("opacity", 0)}

/* Create timeline*/
for (i = 0; i <= years.length - 1; i++) {
  var releft = (years[i]-yearmin)/(yearmax-yearmin)*1120
  console.log(releft)
  d3.select("#timeline1")
  .append("div")
  .attr("class", function(){
  if (i===0){return "circleactive circleinactive"}
  else{return "circleinactive"}})
  .attr("id", "circle"+i)
  .style("left", releft-10)
  .append("div")
  .text(years[i])
  .attr("class", function(){
  if (i===0){return "textactive textinactive"}
  else{return "textinactive"}})
  .attr("id", "text" + i )
}

var mapwidth=800
var mapheight=680
var years = [189, 195, 200, 208, 214, 221, 263, 280]
var yearmax = years[years.length-1] + 4
var yearmin = years[0]-4

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
var forcex195 = d3.forceX(function(d){
  if(d.emperor195 === '1') {
    return 11*mapwidth/16-mapwidth/2}
  if(d.emperor195 === "2") {
    return 25*mapwidth/32-mapwidth/2}
  if(d.emperor195 === '3') {
    return 25*mapwidth/32-mapwidth/2}
  if(d.emperor195 === '4') {
    return 21*mapwidth/32-mapwidth/2}
  if(d.emperor195 === '5') {
    return 12*mapwidth/32-mapwidth/2}
  if(d.emperor195 === "6") {
    return 18*mapwidth/32-mapwidth/2}
  if(d.emperor195 === '7') {
    return 15*mapwidth/32-mapwidth/2}
  if(d.emperor195 === "8") {
    return 10*mapwidth/32-mapwidth/2}
  if(d.emperor195 === "9") {
    return 14*mapwidth/32-mapwidth/2}
  if(d.emperor195 === "10") {
    return 22*mapwidth/32-mapwidth/2}
  if(d.emperor195 === "11") {
    return 23*mapwidth/32-mapwidth/2}
  if(d.emperor195 === "12") {
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor195 === "14") {
    return 23*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey195 = d3.forceY(function(d){
  if(d.emperor195 === '1') {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor195 === "2") {
    return 13*mapheight/32-mapheight/2}
  if(d.emperor195 === "3") {
    return 17*mapheight/32-mapheight/2}
  if(d.emperor195 === "4") {
    return 8*mapheight/32-mapheight/2}
  if(d.emperor195 === "5") {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor195 === "6") {
    return 17*mapheight/32-mapheight/2}
  if(d.emperor195 === "7") {
    return 13*mapheight/32-mapheight/2}
  if(d.emperor195 === "8") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor195 === "9") {
    return 15*mapheight/32-mapheight/2}
  if(d.emperor195 === "10") {
    return 5*mapheight/32-mapheight/2}
  if(d.emperor195 === "11") {
    return 16*mapheight/32-mapheight/2}
  if(d.emperor195 === "12") {
    return 12*mapheight/32-mapheight/2}
  if(d.emperor195 === "14") {
    return 14*mapheight/32-mapheight/2}
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
    return 18*mapheight/32-mapheight/2}
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
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor208 === "2") {
    return 21*mapwidth/32-mapwidth/2}
  if(d.emperor208 === '3') {
    return 24*mapwidth/32-mapwidth/2}
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
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey208 = d3.forceY(function(d){
  if(d.emperor208 === '1') {
    return 10*mapheight/32-mapheight/2}
  if(d.emperor208 === "2") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor208 === "3") {
    return 17*mapheight/32-mapheight/2}
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
  else{return 28*mapheight/32-mapheight/2}}).strength(.4)
var forcex214 = d3.forceX(function(d){
  if(d.emperor214 === '1') {
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor214 === "2") {
    return 11*mapwidth/32-mapwidth/2}
  if(d.emperor214 === '3') {
    return 24*mapwidth/32-mapwidth/2}
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
    return 20*mapheight/32-mapheight/2}
  if(d.emperor214 === "3") {
    return 20*mapheight/32-mapheight/2}
  if(d.emperor214 === "5") {
    return 10*mapheight/32-mapheight/2}
  if(d.emperor214 === "8") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor214 === "9") {
    return 15*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.2)
var forcex221 = d3.forceX(function(d){
  if(d.emperor221 === '1') {
    return 20*mapwidth/32-mapwidth/2}
  if(d.emperor221 === "2") {
    return 11*mapwidth/32-mapwidth/2}
  if(d.emperor221 === '3') {
    return 24*mapwidth/32-mapwidth/2}
  if(d.emperor221 === '5') {
      return 8*mapwidth/32-mapwidth/2}
  if(d.emperor221 === "9") {
    return 14*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey221 = d3.forceY(function(d){
  if(d.emperor221 === '1') {
    return 10*mapheight/32-mapheight/2}
  if(d.emperor221 === "2") {
    return 20*mapheight/32-mapheight/2}
  if(d.emperor221 === "3") {
    return 20*mapheight/32-mapheight/2}
  if(d.emperor221 === "5") {
    return 4*mapheight/32-mapheight/2}
  if(d.emperor221 === "9") {
    return 15*mapheight/32-mapheight/2}
  else{return 28*mapheight/32-mapheight/2}}).strength(.2)
var forcex263 = d3.forceX(function(d){
  if(d.emperor263 === '1') {
    return 16*mapwidth/32-mapwidth/2}
  if(d.emperor263 === "2") {
    return 10*mapwidth/32-mapwidth/2}
  if(d.emperor263 === '3') {
    return 24*mapwidth/32-mapwidth/2}
  else{return 20*mapwidth/32-mapwidth/2}}).strength(.2)
var forcey263 = d3.forceY(function(d){
  if(d.emperor263 === '1') {
    return 14*mapheight/32-mapheight/2}
  if(d.emperor263 === "2") {
    return 18*mapheight/32-mapheight/2}
  if(d.emperor263 === "3") {
    return 20*mapheight/32-mapheight/2}
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
var color = d3.scaleOrdinal(["#6E7378", "#DD6776", "#EDAE33", "#B27BA6", "#869CA8", "#957C8C", "#578EC1", "#6BBEC9", "#A0A0A0","#D67C60", "#74BA8C", "#DFAB86","#DBC9A7", "#8BAAC7","#938EB6"])

/* Define d3 force*/
var simulation = d3.forceSimulation()
  .force("forceX", forcex189)
  .force("forceY", forcey189)
  .force("collide", d3.forceCollide().strength(1).iterations(10).radius(function(d){
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
  .text("董卓废嫡立庶，残暴专权。袁绍，曹操等中央官员纷纷逃离京都，联合关东群雄，于初平元年（190年）组成讨董联军，进军洛阳。迫使董卓迁都长安，火烧洛阳。虽然讨董联军声势浩大，各方诸侯却惧怕董卓，各自保存实力，甚至各怀鬼胎，相互制衡。伴随着一系列的内讧，讨董联盟于初平二年（191年）瓦解。")


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
    .text("中平六年（189年），董卓废嫡立庶，残暴专权。袁绍，曹操等中央官员纷纷逃离京都，联合关东群雄，于初平元年（190年）组成讨董联军，进军洛阳，经过多场战役，双方各有胜负。而后董卓则迁都长安，火烧洛阳。虽然讨董联军声势浩大，各方诸侯却惧怕董卓，各自保存实力，甚至各怀鬼胎，相互制衡。伴随着一系列的内讧，讨董联盟于初平二年（191年）瓦解。")

    simulation
      .force("forceX", forcex189)
      .force("forceY", forcey189)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power189)+1}))
      .alphaTarget(0.2).restart()
  })
  d3.select("#circle1").on('click', function() {
    console.log("hellohello195")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power195)})
    .attr("fill", function(d){return color(d.emperor195)})

    d3.selectAll(".circleinactive")
    .attr("class", "circleinactive")
    d3.selectAll(".textinactive")
    .attr("class", "textinactive")
    d3.select(this)
    .attr("class", "circleinactive circleactive")
    d3.select(this).select(".textinactive")
    .attr("class", "textinactive textactive")
    d3.select("h3")
    .text("群雄割据")
    d3.select("p")
    .text("讨董联盟瓦解之后，王允设计，挑拨吕布杀死董卓，但吕布最终仍被董卓残部所败，逃离长安。中央对地方的控制愈发微弱。地方豪强相互征伐，进行扩张，最终形成了群雄割据的局面，曹操，刘备，孙策等三方都在这时逐渐建立了自己的势力范围。")

    simulation
      .force("forceX", forcex195)
      .force("forceY", forcey195)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power195)+1}))
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
    .text("曹操挟天子以令诸侯，先后占据了兖州、徐州、司隶以及部分豫州、扬州寿春一带。而袁绍拥幽州、冀州、青州、并州之众，结连乌桓，尽有黄河以北之地，意欲南向以争天下。建安五年（200年），曹操军与袁绍军相持于官渡，在此展开战略决战。曹操奇袭袁军在乌巢的粮仓，继而击溃袁军主力。此战奠定了曹操统一中国北方的基础。")

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
    .text("建安十三年（208年），基本控制北方的曹操率大军南下荆州。占据荆州的刘琮投降。曹操追击刘备，在东吴鲁肃的邀请下，诸葛亮出使江东协议结盟。孙权派遣都督周瑜、程普率军与刘备组成联军，在长江赤壁以黄盖诈降火攻，大破曹军的连环船，曹操落荒北回。此战后，曹军退守襄阳，曹孙刘三分荆州，奠定三国鼎立之势。")

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
    .text("赤壁之战后，刘备占据荆南五郡，已有意图占据益州。益州牧刘璋接受部下建议，邀刘备入蜀攻打张鲁，抵御曹操。建安十七年（212年），刘璋与刘备决裂并发动战争。建安十九年（214年），刘备围困成都，刘璋向刘备投降。刘备自此夺得益州，实现了诸葛亮在隆中对中「跨有荆、益」的计策。")

    simulation
      .force("forceX", forcex214)
      .force("forceY", forcey214)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power214)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle5").on('click', function() {
    console.log("hellohello221")
    circles.transition().duration(800)
    .attr("r", function(d){return scaleRadius(d.power221)})
    .attr("fill", function(d){return color(d.emperor221)})

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
    .text("经过一系列战役，曹操统一中国北方，刘备占据益州及部分荆州，而孙权则盘踞东南，魏蜀吴三方相继称帝，成为西汉末年绝对的霸主，三国鼎立的时代开始。")

    simulation
      .force("forceX", forcex221)
      .force("forceY", forcey221)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power221)+1}))
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
    .text("蜀汉建立后，经过一系列的北伐，国力日渐消耗，加上后主刘禅宠信宦官，朝政日非。263年，曹魏向蜀汉发动战争，分三路进攻汉中。最终邓艾率精兵偷渡阴平攻占涪城，进逼成都。汉后主刘禅出降，汉灭亡，开启了三国时代的统一战。")

    simulation
      .force("forceX", forcex263)
      .force("forceY", forcey263)
      .force("collide", d3.forceCollide().strength(1).iterations(20).radius(function(d){
        return scaleRadius(d.power263)+1}))
      .alphaTarget(0.2).restart()

  })
  d3.select("#circle7").on('click', function() {
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
    .text("279年，晋武帝司马炎下令大举伐吴，二十万晋军兵分六路直指建业，此时吴国内部矛盾重重，人心离散，再加上双方势力悬殊，战后不久，吴国各地守军便陆续向晋国归降。280年5月，吴主孙皓正式投降，晋朝成功统一全国，结束自东汉未年群雄割据的分裂局面。")

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

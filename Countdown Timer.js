<script>
  // kunin time sa db
  let rawDate = '{{ $auction->end_time }}';
  // convert date to milliseconds
  let endDate = new Date(rawDate).getTime();

  //running every second
  let countDown = setInterval(() => {
    let nowDate = new Date().getTime();
    let distance = endDate - nowDate;

    // kung may days
    let days = Math.floor(distance/(1000 * 60 * 60 * 24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    let seconds = Math.floor((distance%(1000*60))/1000);
    document.getElementById("biddingTime").innerHTML =  hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("biddingTime2").innerHTML =  hours + "h " + minutes + "m " + seconds + "s ";
    if(distance<0) {
      clearInterval(countDown);
      document.getElementById("biddingTime").innerHTML = "Auction is completed";
      document.getElementById("biddingTime2").innerHTML = "Auction is completed";
    }
  }, 1000);
  // check kung tama time
  console.log(rawDate);
</script>

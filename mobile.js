<script>
if (/Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "mobile.css";
    document.head.appendChild(link);
}
</script>
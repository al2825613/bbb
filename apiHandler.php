
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$url = $_GET['url'] ?? '';

if (!$url) {
    echo json_encode([]);
    exit;
}

// هذا مثال ثابت للعرض فقط - استبدله بـ API الخاص بك
$response = [
    ["quality" => "1080p", "url" => "https://example.com/video-1080.mp4"],
    ["quality" => "720p",  "url" => "https://example.com/video-720.mp4"],
    ["quality" => "480p",  "url" => "https://example.com/video-480.mp4"]
];

echo json_encode($response);
?>

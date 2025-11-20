<?php
session_start();
$conn = mysqli_connect("localhost","root","","cms");
if(!$conn){ die("DB error"); }
mysqli_set_charset($conn,"utf8mb4");

function h($x){ return htmlspecialchars($x??"",ENT_QUOTES); }

/* SUBJECT LIST */
$subs = [
  "py1500"=>"Python",
  "ds2253"=>"Data Structures",
  "wt2258"=>"Web Tech",
  "dccn2251"=>"DCN",
  "coa2257"=>"COA",
  "mat2501"=>"Maths",
  "fin1002"=>"Finance",
  "apt4002"=>"Aptitude"
];

/* ---------- LOGOUT ---------- */
if(isset($_GET['logout'])){
  session_unset();
  session_destroy();
  header("Location: index.php");
  exit;
}

/* ================================================================
   LOGIN PAGE (FIRST SCREEN)
=================================================================== */
if(!isset($_SESSION['role'])){
  $err = "";

  if($_SERVER['REQUEST_METHOD']==='POST'){
    $pwd  = $_POST['password'] ?? "";
    $role = $_POST['login_as'] ?? "";
    $uid  = $_POST['userid'] ?? "";

    if($pwd !== "pu@123"){
      $err = "Wrong password";
    } elseif($role!=="student" && $role!=="teacher"){
      $err = "Choose Student or Teacher";
    } else {
      $_SESSION['role']   = $role;
      $_SESSION['userid'] = $uid;
      $_SESSION['id']     = 1;
      header("Location: index.php");
      exit;
    }
  }
?>
<!DOCTYPE html>
<html>
<head>
<title>College Management System</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css">
</head>
<body class="dark-bg">
<div class="login-wrapper">
  <div class="glass-card login-box">
    <h1 class="title">UniCloud</h1>
    <h1 class="title">College Management System</h1>
    <?php if($err): ?>
      <p class="error"><?php echo h($err); ?></p>
    <?php endif; ?>

    <form method="post">
      <input name="userid" class="input" placeholder="User ID">
      <input name="password" type="password" class="input" placeholder="Password">

      <div class="login-btn-row">
        <button class="btn" name="login_as" value="student">Student Login</button>
        <button class="btn" name="login_as" value="teacher">Teacher Login</button>
      </div>
    </form>
  </div>
</div>
</body>
</html>
<?php
exit;
}

/* After login */
$role = $_SESSION['role'];
$page = $_GET['page'] ?? "home";

/* Load user */
if($role==="student"){
  $q=mysqli_query($conn,"SELECT * FROM students WHERE id=1");
  $u=mysqli_fetch_assoc($q) ?: ["name"=>"","email"=>"","phone"=>"","rollno"=>""];
}else{
  $q=mysqli_query($conn,"SELECT * FROM teachers WHERE id=1");
  $u=mysqli_fetch_assoc($q) ?: ["name"=>"","email"=>"","phone"=>"","subject_code"=>"py1500","position"=>"","salary"=>""];
}

/* ---------- FORM HANDLERS ---------- */
if($_SERVER['REQUEST_METHOD']==='POST'){
  $act=$_POST['action']??"";

  if($act==="upd_student"){
    $name=mysqli_real_escape_string($conn,$_POST['name']);
    $email=mysqli_real_escape_string($conn,$_POST['email']);
    $phone=mysqli_real_escape_string($conn,$_POST['phone']);
    $roll=mysqli_real_escape_string($conn,$_POST['rollno']);
    mysqli_query($conn,"UPDATE students SET name='$name',email='$email',phone='$phone',rollno='$roll' WHERE id=1");
    header("Location: index.php?page=profile"); exit;
  }

  if($act==="upd_teacher"){
    $name=mysqli_real_escape_string($conn,$_POST['name']);
    $email=mysqli_real_escape_string($conn,$_POST['email']);
    $phone=mysqli_real_escape_string($conn,$_POST['phone']);
    $sub=mysqli_real_escape_string($conn,$_POST['subject']);
    $pos=mysqli_real_escape_string($conn,$_POST['position']);
    $sal=(int)$_POST['salary'];
    mysqli_query($conn,"UPDATE teachers SET name='$name',email='$email',phone='$phone',subject_code='$sub',
                        position='$pos',salary=$sal WHERE id=1");
    header("Location: index.php?page=profile"); exit;
  }

  if($act==="msg"){
    $msg=mysqli_real_escape_string($conn,$_POST['msg']);
    if($msg!==""){
      mysqli_query($conn,"INSERT INTO messages(user_type,user_id,message) VALUES('$role',1,'$msg')");
    }
    header("Location: index.php?page=chat"); exit;
  }

  if($act==="leave"){
    $f=$_POST['from'];
    $t=$_POST['to'];
    $r=mysqli_real_escape_string($conn,$_POST['reason']);
    mysqli_query($conn,"INSERT INTO leaves(user_type,user_id,from_date,to_date,reason)
                        VALUES('$role',1,'$f','$t','$r')");
    header("Location: index.php?page=leave"); exit;
  }

  if($act==="savem" && $role==="teacher"){
    foreach($subs as $c=>$n){
      $mid=(int)($_POST[$c.'_mid']??0);
      $end=(int)($_POST[$c.'_end']??0);
      mysqli_query($conn,"REPLACE INTO marks(student_id,subject_code,exam_type,marks)
                          VALUES(1,'$c','mid',$mid)");
      mysqli_query($conn,"REPLACE INTO marks(student_id,subject_code,exam_type,marks)
                          VALUES(1,'$c','end',$end)");
    }
    header("Location: index.php?page=marks"); exit;
  }
}

/* ---------------- UI START ---------------- */
?>
<!DOCTYPE html>
<html>
<head>
<title>CMS</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="style.css">
</head>
<body class="app-bg">

<div class="app">
  <aside class="side">
    <div class="side-title"><?php echo ucfirst($role);?> Portal</div>
    <a class="nav <?php if($page=='home')echo'act';?>"     href="index.php?page=home">Home</a>
    <a class="nav <?php if($page=='profile')echo'act';?>"  href="index.php?page=profile">Profile</a>
    <a class="nav <?php if($page=='chat')echo'act';?>"     href="index.php?page=chat">Chat</a>
    <a class="nav <?php if($page=='marks')echo'act';?>"    href="index.php?page=marks">Marks</a>
    <a class="nav <?php if($page=='fees')echo'act';?>"     href="index.php?page=fees">Fees</a>
    <a class="nav <?php if($page=='calendar')echo'act';?>" href="index.php?page=calendar">Calendar</a>
    <a class="nav <?php if($page=='leave')echo'act';?>"    href="index.php?page=leave">Leave</a>
    <a class="nav" href="index.php?logout=1">Logout</a>
  </aside>

  <main class="main glass-card-main">
    <?php if($page==="home"): ?>
      <h1>Welcome, <?php echo h($u['name']); ?></h1>
      <div class="card">
        <?php if($role==="student"): ?>
          <p>Roll No: <?php echo h($u['rollno']); ?></p>
          <p>Email: <?php echo h($u['email']); ?></p>
        <?php else: ?>
          <p>Subject: <?php echo h($u['subject_code']); ?></p>
          <p>Position: <?php echo h($u['position']); ?></p>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <?php if($page==="profile"): ?>
      <h1>Profile</h1>
      <div class="card">
        <form method="post">
          <input type="hidden" name="action" value="<?php echo $role==='student'?'upd_student':'upd_teacher'; ?>">
          <input class="input" name="name"  value="<?php echo h($u['name']); ?>" placeholder="Name">
          <input class="input" name="email" value="<?php echo h($u['email']);?>" placeholder="Email">
          <input class="input" name="phone" value="<?php echo h($u['phone']);?>" placeholder="Phone">

          <?php if($role==='student'): ?>
            <input class="input" name="rollno" value="<?php echo h($u['rollno']);?>" placeholder="Roll No">
          <?php else: ?>
            <select class="input" name="subject">
              <?php foreach($subs as $c=>$n): ?>
                <option value="<?php echo $c; ?>" <?php if($u['subject_code']==$c)echo"selected";?>><?php echo "$c - $n";?></option>
              <?php endforeach; ?>
            </select>
            <input class="input" name="position" value="<?php echo h($u['position']);?>" placeholder="Position">
            <input class="input" name="salary"   value="<?php echo h($u['salary']);?>"   placeholder="Salary">
          <?php endif; ?>

          <button class="btn">Save</button>
        </form>
      </div>
    <?php endif; ?>

    <?php if($page==="chat"): ?>
      <h1>Group Chat</h1>
      <div class="card chat-box">
        <?php
        $c=mysqli_query($conn,"SELECT * FROM messages ORDER BY id");
        if(mysqli_num_rows($c)==0) echo "<p class='muted'>No messages yet</p>";
        while($m=mysqli_fetch_assoc($c)){
          echo "<div class='bubble'><b>".h($m['user_type']).":</b> ".h($m['message'])."</div>";
        }
        ?>
      </div>
      <form method="post" class="chat-input">
        <input type="hidden" name="action" value="msg">
        <input class="input" name="msg" placeholder="Type a message...">
        <button class="btn">Send</button>
      </form>
    <?php endif; ?>

    <?php if($page==="marks"):
      $mid=[];$end=[];
      $m=mysqli_query($conn,"SELECT * FROM marks WHERE student_id=1");
      while($r=mysqli_fetch_assoc($m)){
        if($r['exam_type']=='mid') $mid[$r['subject_code']]=$r['marks'];
        else $end[$r['subject_code']]=$r['marks'];
      }
    ?>
      <h1>Marks</h1>
      <div class="card">
        <table class="table">
          <tr><th>Subject</th><th>Mid</th><th>End</th></tr>
          <?php foreach($subs as $c=>$n): ?>
            <tr>
              <td><?php echo $c; ?></td>
              <td><?php echo $mid[$c]??""; ?></td>
              <td><?php echo $end[$c]??""; ?></td>
            </tr>
          <?php endforeach; ?>
        </table>
      </div>
      <?php if($role==="teacher"): ?>
      <div class="card">
        <form method="post">
          <input type="hidden" name="action" value="savem">
          <table class="table">
            <tr><th>Sub</th><th>Mid</th><th>End</th></tr>
            <?php foreach($subs as $c=>$n): ?>
            <tr>
              <td><?php echo $c; ?></td>
              <td><input class="input small" name="<?php echo $c;?>_mid" value="<?php echo $mid[$c]??"";?>"></td>
              <td><input class="input small" name="<?php echo $c;?>_end" value="<?php echo $end[$c]??"";?>"></td>
            </tr>
            <?php endforeach; ?>
          </table>
          <button class="btn">Save</button>
        </form>
      </div>
      <?php endif; ?>
    <?php endif; ?>

    <?php if($page==="fees"): ?>
      <h1>Fees</h1>
      <div class="card">
      <?php
      if($role==="student"){
        $f=mysqli_fetch_assoc(mysqli_query($conn,"SELECT * FROM fees WHERE student_id=1 LIMIT 1"));
        if(!$f) $f=["total"=>0,"paid"=>0];
        echo "<p>Total: ₹".$f['total']."</p>";
        echo "<p>Paid: ₹".$f['paid']."</p>";
        echo "<p>Pending: ₹".($f['total']-$f['paid'])."</p>";
      }else{
        echo "<p class='muted'>No fees for teachers</p>";
      }
      ?>
      </div>
    <?php endif; ?>

    <?php if($page==="calendar"): ?>
      <h1>Calendar</h1>
      <div class="card">
        <h2>Events</h2>
        <table class="table">
          <tr><th>Date</th><th>Event</th></tr>
          <tr><td>2025-01-01</td><td>New Year Holiday</td></tr>
          <tr><td>2025-01-26</td><td>Republic Day</td></tr>
          <tr><td>2025-04-10</td><td>Midsem Start</td></tr>
          <tr><td>2025-04-16</td><td>Midsem End</td></tr>
          <tr><td>2025-06-20</td><td>Endsem Start</td></tr>
          <tr><td>2025-06-26</td><td>Endsem End</td></tr>
          <tr><td>2025-08-15</td><td>Independence Day</td></tr>
          <tr><td>2025-12-25</td><td>Christmas</td></tr>
        </table>
      </div>

      <div class="card">
        <h2>Weekly Timetable</h2>
        <table class="table">
          <tr><td>Monday</td><td>py1500</td></tr>
          <tr><td>Tuesday</td><td>ds2253</td></tr>
          <tr><td>Wednesday</td><td>wt2258</td></tr>
          <tr><td>Thursday</td><td>dccn2251</td></tr>
          <tr><td>Friday</td><td>coa2257</td></tr>
        </table>
      </div>
    <?php endif; ?>

    <?php if($page==="leave"):
      $lv=mysqli_query($conn,"SELECT * FROM leaves WHERE user_type='$role' ORDER BY id DESC");
    ?>
      <h1>Leave</h1>
      <div class="card">
        <form method="post">
          <input type="hidden" name="action" value="leave">
          <input class="input" type="date" name="from">
          <input class="input" type="date" name="to">
          <input class="input" name="reason" placeholder="Reason">
          <button class="btn">Apply</button>
        </form>
      </div>
      <div class="card">
        <?php
        if(mysqli_num_rows($lv)==0) echo "<p class='muted'>No leaves</p>";
        while($l=mysqli_fetch_assoc($lv)){
          echo "<p>".h($l['from_date'])." to ".h($l['to_date'])." — ".h($l['reason'])."</p>";
        }
        ?>
      </div>
    <?php endif; ?>

  </main>
</div>
</body>
</html>

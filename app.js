// ── Problem Data ──
const M = [
  "#Array & Matrix",
  "3sum", "Spiral Matrix", "Spiral Matrix II", "Set Matrix Zeroes", "Game of Life",
  "Valid Sudoku", "Jump Game", "Jump Game II", "Merge Intervals", "Insert Interval",
  "Non Overlapping Intervals", "Minimum Number of Arrows to Burst Balloons",
  "Next Permutation", "Maximum Product Subarray", "Gas Station", "Car Pooling",
  "Shortest Unsorted Continuous Subarray", "Max Chunks to Make Sorted", "H Index",
  "Maximum Swap", "Partition Labels", "Find K Closest Elements",
  "Maximum Points You Can Obtain from Cards", "Longest Mountain in Array",
  "Maximum Sum Circular Subarray", "Corporate Flight Bookings",
  "Number of Zero Filled Subarrays", "Non Decreasing Array", "Array Nesting",
  "Arithmetic Slices", "Partition Array Into Disjoint Intervals",
  "Monotone Increasing Digits", "Find Triangular Sum of an Array", "Rotating the Box",
  "Diagonal Traverse", "Walking Robot Simulation", "Range Sum Query 2d Immutable",
  "Sort the Matrix Diagonally", "Number of Laser Beams in a Bank",
  "Minimum Domino Rotations for Equal Row",
  "Minimum Number of Operations to Move All Balls to Each Box", "Shifting Letters",
  "Increasing Triplet Subsequence", "Maximum Sum Obtained of Any Permutation",
  "Find Missing Observations", "Number of Ways to Split Array",
  "Minimum Average Difference", "Count Number of Teams",
  "Previous Permutation with One Swap", "Sum of Subarray Ranges",
  "Longest Square Streak in an Array", "Minimum Rounds to Complete All Tasks",

  "#Hashmap & Prefix Sum",
  "Group Anagrams", "Top K Frequent Elements", "Longest Consecutive Sequence",
  "Subarray Sum Equals K", "Continuous Subarray Sum", "Contiguous Array",
  "Subarray Sums Divisible by K", "4sum II", "Brick Wall",
  "Insert Delete Getrandom O1", "Top K Frequent Words", "Bulls and Cows",
  "Find Players with Zero or One Losses", "Equal Row and Column Pairs",
  "Rabbits in Forest", "Number of Boomerangs", "Tuple with Same Product",
  "Count Nice Pairs in an Array", "Check If Array Pairs Are Divisible by K",
  "Reduce Array Size to the Half", "Count Number of Nice Subarrays",
  "Binary Subarrays with Sum", "3sum with Multiplicity", "K Diff Pairs in an Array",
  "Pairs of Songs with Total Durations Divisible by 60",
  "Find Duplicate File in System", "Word Subsets",
  "Group the People Given the Group Size They Belong to", "Random Pick Index",
  "Number of Pairs of Interchangeable Rectangles",
  "Display Table of Food Orders in a Restaurant", "Find and Replace Pattern",
  "Replace Words", "Short Encoding of Words",
  "Least Number of Unique Integers After K Removals",
  "Fraction to Recurring Decimal", "Single Number II", "Single Number III",
  "Reconstruct Original Digits from English", "Minimum Number of Frogs Croaking",
  "Longest Word in Dictionary",

  "#String",
  "Longest Substring Without Repeating Characters", "Permutation in String",
  "Find All Anagrams in a String", "String to Integer Atoi", "Integer to Roman",
  "Zigzag Conversion", "Longest Palindromic Substring", "Palindromic Substrings",
  "Reverse Words in a String", "Multiply Strings", "Compare Version Numbers",
  "Count and Say", "Custom Sort String", "Sort Characters by Frequency",
  "Largest Number", "Determine If Two Strings Are Close",
  "Minimum Number of Steps to Make Two Strings Anagram",
  "Minimum Deletions to Make Character Frequencies Unique",
  "Number of Good Ways to Split a String", "Restore Ip Addresses",
  "Number of Matching Subsequences", "Find and Replace in String",
  "Next Greater Element III", "Minimum Add to Make Parentheses Valid",
  "Break a Palindrome", "Optimal Partition of String",
  "Construct K Palindrome Strings", "Minimum Time Difference",
  "String Compression",
  "Remove Colored Pieces If Both Neighbors Are the Same Color",
  "Check If a String Can Break Another String", "Sort Vowels in a String",
  "Complex Number Multiplication", "Minimum Number of Pushes to Type Word II",
  "Push Dominoes", "Masking Personal Information", "Validate Ip Address",
  "Smallest String with a Given Numeric Value",

  "#Sorting",
  "Sort the Students by Their Kth Score", "Queue Reconstruction by Height",
  "Two City Scheduling", "Advantage Shuffle",
  "Minimum Moves to Equal Array Elements II", "K Closest Points to Origin",
  "Rank Teams by Votes", "Sort the Jumbled Numbers",
  "Kth Largest Element in an Array", "Wiggle Sort II", "Sort an Array",
  "Minimum Operations to Reduce X to Zero", "Bag of Tokens",
  "Maximum Length of Pair Chain", "Maximum Ice Cream Bars",
  "Partition Array Such That Maximum Difference is K",
  "Maximum Number of Integers to Choose from a Range I",
  "Sort Integers by the Power Value", "Largest Time for Given Digits",

  "#Recursion",
  "Subsets", "Subsets II", "Permutations", "Permutations II", "Combinations",
  "Combination Sum", "Combination Sum II", "Combination Sum III",
  "Letter Combinations of a Phone Number", "Generate Parentheses",
  "Palindrome Partitioning", "Word Search", "Gray Code", "Beautiful Arrangement",
  "Letter Case Permutation", "Different Ways to Add Parentheses",
  "K Th Symbol in Grammar", "Increasing Subsequences",
  "Partition to K Equal Sum Subsets", "Matchsticks to Square",
  "Count Sorted Vowel Strings",
  "Split a String Into the Max Number of Unique Substrings",
  "Maximum Length of a Concatenated String with Unique Characters",
  "Find Unique Binary String", "Numbers with Same Consecutive Differences",
  "Target Sum",
  "The K Th Lexicographical String of All Happy Strings of Length N",
  "Construct the Lexicographically Largest Valid Sequence",
  "Fair Distribution of Cookies", "Find the Winner of the Circular Game",
  "Lexicographical Numbers", "Path with Maximum Gold", "Additive Number",
  "Splitting a String Into Descending Consecutive Values",
  "Count Number of Maximum Bitwise or Subsets", "Super Pow",
  "Bitwise and of Numbers Range",

  "#More",
  "Find the Prefix Common Array of Two Arrays",
  "Minimum Number of Operations to Make Array Empty",
  "Rearrange Array to Maximize Prefix Score",
  "Maximum Matching of Players with Trainers", "Valid Parenthesis String",
  "Minimum Number of Swaps to Make the String Balanced",
  "Longest Palindrome by Concatenating Two Letter Words",
  "Arithmetic Subarrays", "Maximum Product of Word Lengths",
  "Jump Game III", "Jump Game Vii", "String Without Aaa or Bbb",
  "Largest 1 Bordered Square"
];

const R = [
  "Two Sum", "Create Hello World Function",
  "Number of Steps to Reduce a Number to Zero", "Fizz Buzz",
  "Kids With the Greatest Number of Candies", "Shuffle the Array",
  "Running Sum of 1d Array", "Concatenation of Array",
  "Build Array from Permutation", "Richest Customer Wealth", "Fibonacci Number",
  "Palindrome Number", "Perfect Number",
  "Subtract the Product and Sum of Digits of an Integer", "Add Two Integers",
  "Transpose Matrix", "Check Divisibility by Digit Sum and Product",
  "Number of Good Pairs", "Find the Highest Altitude",
  "Find Numbers with Even Number of Digits",
  "Check if the Sentence Is Pangram", "Reverse String", "Sqrt(x)|sqrtx",
  "Count Equal and Divisible Pairs in an Array",
  "Find Greatest Common Divisor of Array",
  "Minimum Operations to Make Array Sum Divisible by K", "Valid Perfect Square",
  "Find Words Containing Character", "Count the Digits That Divide a Number",
  "Minimum Number Game", "Robot Return to Origin",
  "Number of Employees Who Met the Target", "Sum Multiples",
  "Find the Maximum Achievable Number", "XOR Operation in an Array",
  "Difference Between Element Sum and Digit Sum of an Array", "Score of a String",
  "Find First Palindromic String in the Array", "Guess Number Higher or Lower",
  "Maximum Number of Words Found in Sentences", "Rotate Array", "Ugly Number",
  "Create Target Array in the Given Order", "Flipping an Image",
  "Divisible and Non-divisible Sums Difference",
  "How Many Numbers Are Smaller Than the Current Number", "Matrix Diagonal Sum",
  "Find Smallest Letter Greater Than Target", "Search Insert Position",
  "Binary Search", "Sign of the Product of an Array", "Add Digits",
  "Find in Mountain Array", "Find Peak Element", "Peak Index in a Mountain Array",
  "Find First and Last Position of Element in Sorted Array", "Reverse Integer",
  "First Bad Version", "Find N Unique Integers Sum up to Zero",
  "Check If N and Its Double Exist", "Maximum Product Difference Between Two Pairs",
  "Maximum Product of Two Elements in an Array",
  "Construct Uniform Parity Array I", "Defanging an IP Address",
  "Final Value of Variable After Performing Operations", "Jewels and Stones",
  "Construct Uniform Parity Array II", "Single Number", "Search a 2D Matrix II",
  "Search a 2D Matrix",
  "Determine Whether Matrix Can Be Obtained By Rotation", "Rotate Image",
  "Matrix Similarity After Cyclic Shifts",
  "Minimum Number of Moves to Seat Everyone", "Transform Array by Parity",
  "Find the Duplicate Number", "Find All Numbers Disappeared in an Array",
  "Missing Number", "Find All Duplicates in an Array", "Majority Element",
  "Count Commas in Range", "Count Commas in Range II", "Set Mismatch",
  "Max Number of K-Sum Pairs", "Sort Colors", "First Missing Positive",
  "Remove Duplicates from Sorted Array", "Move Zeroes", "Maximum Subarray",
  "Boats to Save People", "Apply Operations to an Array",
  "Check if Array is Good", "Merge Sorted Array",
  "Find Minimum in Rotated Sorted Array", "Count Items Matching a Rule",
  "Find Minimum in Rotated Sorted Array II", "Search in Rotated Sorted Array",
  "Search in Rotated Sorted Array II", "Pow(x, n)|powx-n", "Remove Element",
  "Count Primes", "Minimum Common Value", "Water Bottles", "Nim Game",
  "Find Minimum Operations to Make All Elements Divisible by Three",
  "Count of Matches in Tournament", "Single Element in a Sorted Array",
  "Count Distinct Numbers on Board",
  "Find the Smallest Divisor Given a Threshold", "House Robber",
  "Climbing Stairs", "N-th Tribonacci Number",
  "Best Time to Buy and Sell Stock", "Range Sum Query - Immutable",
  "Max Consecutive Ones", "Find Pivot Index",
  "Two Sum II - Input Array Is Sorted", "Contains Duplicate",
  "Valid Palindrome", "Container With Most Water", "Plus One",
  "Sort Array By Parity", "Squares of a Sorted Array",
  "Min Cost Climbing Stairs", "Counting Bits", "Number of 1 Bits",
  "Power of Two", "Monotonic Array", "Best Time to Buy and Sell Stock II",
  "Sort Array By Parity II", "Minimum Size Subarray Sum", "Power of Three",
  "Power of Four", "Rearrange Array Elements by Sign",
  "Maximum Average Subarray I", "Valid Anagram", "Ransom Note",
  "First Unique Character in a String", "Intersection of Two Arrays",
  "Intersection of Two Arrays II", "Angle Between Hands of a Clock",
  "Bulb Switcher", "Separate Black and White Balls", "Duplicate Zeros",
  "Longest Common Prefix", "Merge Strings Alternately", "Length of Last Word",
  "Remove Duplicates from Sorted Array II", "Majority Element II",
  "Is Subsequence", "Reverse Words in a String III", "Isomorphic Strings",
  "Product of Array Except Self", "Roman to Integer"
];

// ── Helpers ──
const slugify = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const parse = (arr) =>
  arr.map((e) =>
    e[0] === "#"
      ? { h: e.slice(1) }
      : ((p) => ({ t: p[0], s: p[1] || slugify(p[0]) }))(e.split("|"))
  );

// ── Lists Config ──
const L = {
  medium: {
    items: parse(M),
    title: "Medium 200",
    sub: "200 new mediums, all solvable with topics you have covered: array, string, hashmap, sorting, recursion. Solve unseen, 25 min cap, then a hint.",
  },
  revision: {
    items: parse(R),
    title: "Revision 154",
    sub: "Your original 154 solved problems. Redo blind and tick only if solved cleanly without help.",
  },
};

// ── State (localStorage) ──
const KEY = "lc-practice-v1";
let st = {};
try {
  st = JSON.parse(localStorage.getItem(KEY) || "{}") || {};
} catch (e) {}
const save = () => {
  try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
};

// ── DOM Helpers ──
const $ = (id) => document.getElementById(id);
let cur = "medium";
let rows = [];

const cnt = (k) => {
  const it = L[k].items.filter((x) => x.s);
  return [it.filter((x) => st[x.s]).length, it.length];
};

// ── Build Problem List ──
function build() {
  const ul = $("ls");
  ul.textContent = "";
  rows = [];
  let n = 0;

  L[cur].items.forEach((x) => {
    const li = document.createElement("li");

    if (x.h) {
      li.className = "h";
      li.textContent = x.h;
      ul.append(li);
      rows.push({ li, h: 1 });
      return;
    }

    n++;
    const sp = document.createElement("span");
    sp.className = "n";
    sp.textContent = n;

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.setAttribute("aria-label", x.t);
    cb.checked = !!st[x.s];
    cb.onchange = () => {
      cb.checked ? (st[x.s] = 1) : delete st[x.s];
      save();
      upd();
    };

    const a = document.createElement("a");
    a.href = "https://leetcode.com/problems/" + x.s + "/";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = x.t;

    li.append(sp, cb, a);
    ul.append(li);
    rows.push({ li, cb, t: x.t.toLowerCase() });
  });

  upd();
}

// ── Update UI ──
function upd() {
  const q = $("q").value.trim().toLowerCase();
  const hs = $("hd").getAttribute("aria-pressed") === "true";
  let sh = 0;

  rows.forEach((r) => {
    if (r.h) { r.li.hidden = false; return; }
    const d = r.cb.checked;
    r.li.classList.toggle("done", d);
    r.li.hidden = !(r.t.includes(q) && !(hs && d));
    if (!r.li.hidden) sh++;
  });

  // Hide empty section headers
  let any = false;
  for (let i = rows.length - 1; i >= 0; i--) {
    const r = rows[i];
    if (r.h) { r.li.hidden = !any; any = false; }
    else if (!r.li.hidden) any = true;
  }

  // Update progress
  const [d, t] = cnt(cur);
  $("dn").textContent = d;
  $("tl").textContent = t;
  const p = Math.round((d / t) * 100);
  $("pc").textContent = p + "%";
  $("fl").style.width = p + "%";
  $("em").hidden = sh > 0;

  // Update sidebar
  let a = 0, b = 0;
  for (const k in L) {
    const [x, y] = cnt(k);
    a += x;
    b += y;
    const tab = $("t-" + k);
    tab.querySelector("span").textContent = x + " / " + y;
    tab.querySelector("i").style.width = Math.round((x / y) * 100) + "%";
    tab.setAttribute("aria-current", k === cur);
  }
  $("tot").innerHTML = "Total <b>" + a + "</b> / " + b;
}

// ── Show List ──
function show(k) {
  cur = L[k] ? k : "medium";
  $("ttl").textContent = L[cur].title;
  $("sub").textContent = L[cur].sub;
  $("q").value = "";
  build();
}

// ── Event Listeners ──
for (const k in L) {
  $("t-" + k).onclick = () => { location.hash = k; };
}

addEventListener("hashchange", () => show(location.hash.slice(1)));

$("q").oninput = upd;

$("hd").onclick = () => {
  const pressed = $("hd").getAttribute("aria-pressed") === "true";
  $("hd").setAttribute("aria-pressed", pressed ? "false" : "true");
  upd();
};

// Reset with double-tap confirm
let arm = false, tm;
$("rs").onclick = () => {
  if (!arm) {
    arm = true;
    $("rs").textContent = "Tap again to clear";
    tm = setTimeout(() => {
      arm = false;
      $("rs").textContent = "Reset this list";
    }, 3000);
    return;
  }
  L[cur].items.forEach((x) => { if (x.s) delete st[x.s]; });
  save();
  arm = false;
  clearTimeout(tm);
  $("rs").textContent = "Reset this list";
  build();
};

// ── Init ──
show(location.hash.slice(1));

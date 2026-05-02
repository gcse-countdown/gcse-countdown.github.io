const RAW_EXAMS = [
    {date:"06/05",board:"CIE",    level:"IGCSE", code:"0990/11",        subject:"English Language",    component:"Paper 1 - Reading",                                                session:"PM",        durationMin:120},
    {date:"07/05",board:"CIE",    level:"GCSE", code:"0977/12",        subject:"History",                        component:"Paper 1 - Structured Questions",                        session:"AM",        durationMin:120},
    {date:"07/05",board:"WJEC", level:"GCSE", code:"C490/UA0-1", subject:"Electronics",                component:"Component 1 - Discovering Electronics",        session:"PM",        durationMin:90},
    {date:"07/05",board:"AQA",    level:"GCSE", code:"8662/LH",        subject:"German",                         component:"Paper 1 - Listening",                                            session:"PM",        durationMin:45},
    {date:"07/05",board:"AQA",    level:"GCSE", code:"8662/RH",        subject:"German",                         component:"Paper 3 - Reading",                                                session:"14:15", durationMin:60},
    {date:"08/05",board:"OCR",    level:"GCSE", code:"J282/01",        subject:"Latin",                            component:"Language Written Paper",                                     session:"11:00", durationMin:90},
    {date:"08/05",board:"CIE",    level:"IGCSE", code:"0992/12",        subject:"English Literature", component:"Poetry and Prose",                                                 session:"AM",        durationMin:90},
    {date:"11/05",board:"CIE",    level:"IGCSE", code:"0992/22",        subject:"English Literature", component:"Drama",                                                                        session:"AM",        durationMin:45},
    {date:"11/05",board:"CIE",    level:"IGCSE", code:"0992/32",        subject:"English Literature", component:"Unseen",                                                                     session:"10:00", durationMin:75},
    {date:"11/05",board:"OCR",    level:"GCSE", code:"J292/01",        subject:"Classical Greek",        component:"Language Written Paper",                                     session:"PM",        durationMin:90},
    {date:"11/05",board:"Edexcel",level:"GCSE", code:"1CN0/1H",    subject:"Chinese",                        component:"Paper 1 - Listening Higher",                             session:"PM",        durationMin:45},
    {date:"11/05",board:"Edexcel",level:"GCSE", code:"1CN0/3H",    subject:"Chinese",                        component:"Paper 3 - Reading Higher",                                 session:"14:15", durationMin:65},
    {date:"12/05",board:"AQA",    level:"GCSE", code:"8062/11-17", subject:"Religious Studies",    component:"Paper 1",                                                                    session:"AM",        durationMin:105},
    {date:"12/05",board:"Edexcel",level:"IGCSE",code:"4BI1/1B",    subject:"Biology",                        component:"Paper 1B",                                                                 session:"PM",        durationMin:120},
    {date:"13/05",board:"OCR",    level:"GCSE", code:"J384/01",        subject:"Geography",                    component:"Our Natural World",                                                session:"AM",        durationMin:90},
    {date:"13/05",board:"Edexcel",level:"GCSE", code:"1CP2/01",    subject:"Computer Science",     component:"Paper 1 - Principles",                                         session:"PM",        durationMin:90},
    {date:"14/05",board:"Edexcel",level:"IGCSE",code:"4MA1/1H",    subject:"Mathematics",                component:"Paper 1H Higher",                                                    session:"AM",        durationMin:120},
    {date:"14/05",board:"OCR",    level:"GCSE", code:"J198/01",        subject:"Ancient History",        component:"Greece and Persia",                                                session:"PM",        durationMin:120},
    {date:"14/05",board:"AQA",    level:"GCSE", code:"8662/WH",        subject:"German",                         component:"Paper 4 - Writing",                                                session:"PM",        durationMin:75},
    {date:"15/05",board:"CIE",    level:"GCSE", code:"0977/22",        subject:"History",                        component:"Paper 2 - Document Questions",                         session:"AM",        durationMin:105},
    {date:"15/05",board:"OCR",    level:"GCSE", code:"J282/03",        subject:"Latin",                            component:"Prose Literature B",                                             session:"PM",        durationMin:60},
    {date:"15/05",board:"WJEC", level:"GCSE", code:"C490/U20-1", subject:"Electronics",                component:"Component 2 - Application of Electronics", session:"PM",        durationMin:90},
    {date:"21/05",board:"CIE",    level:"IGCSE", code:"0990/21",        subject:"English Language",     component:"Paper 2 - Directed Writing and Composition",session:"PM",     durationMin:120},
    {date:"18/05",board:"Edexcel",level:"IGCSE",code:"4CH1/1C",    subject:"Chemistry",                    component:"Paper 1C",                                                                 session:"AM",        durationMin:120},
    {date:"18/05",board:"Edexcel",level:"GCSE", code:"1CN0/4H",    subject:"Chinese",                        component:"Paper 4 - Writing Higher",                                 session:"PM",        durationMin:85},
    {date:"19/05",board:"Edexcel",level:"GCSE", code:"1CP2/02",    subject:"Computer Science",     component:"Paper 2 - Computational Thinking",                 session:"PM",        durationMin:120},
    {date:"20/05",board:"AQA",    level:"GCSE", code:"8652/LH",        subject:"French",                         component:"Paper 1 - Listening",                                            session:"AM",        durationMin:45},
    {date:"20/05",board:"AQA",    level:"GCSE", code:"8652/RH",        subject:"French",                         component:"Paper 3 - Reading",                                                session:"10:15", durationMin:60},
    {date:"20/05",board:"AQA",    level:"GCSE", code:"8062/2A-2B", subject:"Religious Studies",    component:"Paper 2",                                                                    session:"PM",        durationMin:105},
    {date:"21/05",board:"CIE",    level:"IGCSE", code:"0978/12",        subject:"Music",                            component:"Listening Paper 12",                                             session:"AM",        durationMin:75},
    {date:"22/05",board:"OCR",    level:"GCSE", code:"J198/02",        subject:"Ancient History",        component:"Rome and its Neighbours",                                    session:"AM",        durationMin:120},
    {date:"22/05",board:"AQA",    level:"GCSE", code:"8633/LH",        subject:"Italian",                        component:"Paper 1 - Listening",                                            session:"AM",        durationMin:45},
    {date:"22/05",board:"AQA",    level:"GCSE", code:"8633/RH",        subject:"Italian",                        component:"Paper 3 - Reading",                                                session:"10:15", durationMin:60},
    {date:"22/05",board:"OCR",    level:"GCSE", code:"J292/02",        subject:"Classical Greek",        component:"Prose Literature A",                                             session:"PM",        durationMin:60},
    {date:"01/06",board:"AQA",    level:"GCSE", code:"8633/WH",        subject:"Italian",                        component:"Paper 4 - Writing",                                                session:"AM",        durationMin:75},
    {date:"01/06",board:"OCR",    level:"GCSE", code:"J292/04",        subject:"Classical Greek",        component:"Verse Literature A",                                             session:"PM",        durationMin:60},
    {date:"02/06",board:"Edexcel",level:"IGCSE",code:"4PH1/1P",    subject:"Physics",                        component:"Paper 1P",                                                                 session:"AM",        durationMin:120},
    {date:"02/06",board:"OCR",    level:"GCSE", code:"J282/05",        subject:"Latin",                            component:"Verse Literature B",                                             session:"PM",        durationMin:60},
    {date:"03/06",board:"Edexcel",level:"IGCSE",code:"4MA1/2H",    subject:"Mathematics",                component:"Paper 2H Higher",                                                    session:"AM",        durationMin:120},
    {date:"03/06",board:"OCR",    level:"GCSE", code:"J384/02",        subject:"Geography",                    component:"People and Society",                                             session:"PM",        durationMin:90},
    {date:"04/06",board:"AQA",    level:"GCSE", code:"8652/WH",        subject:"French",                         component:"Paper 4 - Writing",                                                session:"PM",        durationMin:75},
    {date:"08/06",board:"Edexcel",level:"IGCSE",code:"4BI1/2B",    subject:"Biology",                        component:"Paper 2B",                                                                 session:"AM",        durationMin:75},
    {date:"09/06",board:"AQA",    level:"GCSE", code:"8692/LH",        subject:"Spanish",                        component:"Paper 1 - Listening",                                            session:"AM",        durationMin:45},
    {date:"09/06",board:"AQA",    level:"GCSE", code:"8692/RH",        subject:"Spanish",                        component:"Paper 3 - Reading",                                                session:"10:00", durationMin:60},
    {date:"10/06",board:"WJEC", level:"GCSE", code:"603/1121/6", subject:"S&C / PD",                     component:"D&T in the 21st Century",                                    session:"PM",        durationMin:120},
    {date:"11/06",board:"OCR",    level:"GCSE", code:"J384/03",        subject:"Geography",                    component:"Geographical Exploration",                                 session:"AM",        durationMin:90},
    {date:"12/06",board:"Edexcel",level:"IGCSE",code:"4CH1/2C",    subject:"Chemistry",                    component:"Paper 2C",                                                                 session:"AM",        durationMin:75},
    {date:"15/06",board:"Edexcel",level:"IGCSE",code:"4PH1/2P",    subject:"Physics",                        component:"Paper 2P",                                                                 session:"AM",        durationMin:75},
    {date:"16/06",board:"AQA",    level:"GCSE", code:"8692/WH",        subject:"Spanish",                        component:"Paper 4 - Writing",                                                session:"AM",        durationMin:75},
    {date:"08/05",board:"WJEC", level:"GCSE", code:"601/8420/6", subject:"Drama",                            component:"Interpreting Theatre",                                         session:"PM",        durationMin:90},
];
const MAX_DAYS = 50;
let prevStates={};

// ── MFL subjects that get speaking exams ──────────────────────────────────────
const MFL_SUBJECTS = ["French", "German", "Spanish", "Italian", "Chinese"];

// Half term: exams on or after 23 May 2026 are after half term
const HALF_TERM_START = new Date(2026, 4, 23, 0, 0, 0, 0); // 23 May 2026

// ── Subject categories ──────────────────────────────────────────────────────
const CATEGORIES = [
    { name: "Essentials",    subjects: ["Biology", "Chemistry", "Physics", "Mathematics", "English Language", "English Literature"] },
    { name: "MFL",             subjects: ["French", "German", "Spanish", "Italian", "Chinese"] },
    { name: "Classics",    subjects: ["Latin", "Classical Greek", "Ancient History"] },
    { name: "Humanities",subjects: ["History", "Geography", "Religious Studies"] },
    { name: "Creatives",    subjects: ["Music", "Drama", "Art", "Electronics", "S&C / PD", "Computer Science"] },
];

// ── Coursework weightings (% of total grade that is coursework) ──────────────
const COURSEWORK = {
    "S&C / PD": 50,
    "Electronics": 20,
    "History": 30,
    "Music": 60,
    "Art": 100,
    "Drama": 60,
};

const STORAGE_KEY = 'filters_v3';
const COMPACT_KEY = 'compact_mode';
const CAL_KEY = 'calendar_mode';
const LEGACY_CAL_KEY = 'legacy_calendar_mode';
const PROGRESS_KEY = 'progress_mode';
const LIGHT_KEY = 'light_mode';
const PLANNER_KEY = 'planner';
const SPEAKING_KEY = 'speaking_dates_v1';
const HIDE_MENUS_KEY = 'hide_menus';
const SHOW_OTHER_EXAMS_KEY = 'show_other_exams';
const TOPBAR_KEY = 'topbar_hidden';
const WEEKENDS_KEY = 'hide_weekends';
const FILTER_COLLAPSED_KEY = 'filter_collapsed';

// Settings configuration: type, default value, and special parsing rules
const SETTINGS_CONFIG = {
  [HIDE_MENUS_KEY]: { type: 'bool', default: false },
  [SHOW_OTHER_EXAMS_KEY]: { type: 'bool', default: false },
  [WEEKENDS_KEY]: { type: 'bool', default: true },
  [PROGRESS_KEY]: { type: 'bool', default: false },
  [COMPACT_KEY]: { type: 'bool', default: false },
  [CAL_KEY]: { type: 'bool', default: false },
  [LEGACY_CAL_KEY]: { type: 'bool', default: false },
  [LIGHT_KEY]: { type: 'bool', default: false },
  [TOPBAR_KEY]: { type: 'bool', default: false },
  [FILTER_COLLAPSED_KEY]: { type: 'bool', default: false },
  [STORAGE_KEY]: { type: 'set', default: new Set() },
  [PLANNER_KEY]: { type: 'json', default: null },
  [SPEAKING_KEY]: { type: 'json', default: {} },
};

// Generic load function supporting booleans, JSON, arrays (as Sets), and custom parsing
function load(key, defaultValue = undefined) {
  const config = SETTINGS_CONFIG[key];
  const def = defaultValue !== undefined ? defaultValue : (config?.default ?? false);
  
  try {
    const val = localStorage.getItem(key);
    if (val === null) return def;
    
    if (config?.type === 'bool') {
      return val === '1';
    } else if (config?.type === 'json') {
      return JSON.parse(val);
    } else if (config?.type === 'set') {
      return new Set(JSON.parse(val));
    }
    return val;
  } catch (e) {
    console.log(e);
    return def;
  }
}

// Generic save function supporting booleans, JSON, arrays, and Sets
function save(key, value) {
  try {
    const config = SETTINGS_CONFIG[key];
    
    if (config?.type === 'bool') {
      localStorage.setItem(key, value ? '1' : '0');
    } else if (config?.type === 'set' && value instanceof Set) {
      localStorage.setItem(key, JSON.stringify([...value]));
    } else if (config?.type === 'json' || typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  } catch (e) {}
}

function makeStart(dateStr, session) {
    const [d,m]=dateStr.split('/').map(Number);
    let hours,minutes;
    if(session==='AM'||session==='PM'){hours=session==='AM'?9:13;minutes=session==='AM'?15:30;}
    else [hours,minutes]=session.split(':');
    return new Date(2026,m-1,d,+hours,+minutes,0,0);
}

function fmtDuration(min){const h=Math.floor(min/60),m=min%60;if(!h)return`${m}m`;if(!m)return`${h}h`;return`${h}h ${m}m`;}
function fmtTime(d){return`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;}
function getState(start,end,now){if(now<start)return'upcoming';if(now<end)return'inprogress';return'over';}
function getFrac(ms){return Math.max(0,Math.min(1,ms/86400000/MAX_DAYS));}
function fracToColor(f){
    if(f<=0)return'rgb(239,68,68)';if(f>=1)return'rgb(34,197,94)';
    if(f<0.5){const t=f/0.5;return`rgb(239,${Math.round(68+115*t)},${Math.round(68*(1-t))})`;}
    const t=(f-0.5)/0.5;return`rgb(${Math.round(234-200*t)},${Math.round(179+18*t)},${Math.round(8+86*t)})`;
}

function fmtCountdown(ms){
    if(ms<=0)return'00d 00h 00m 00s';
    const d=Math.floor(ms/86400000),h=Math.floor((ms%86400000)/3600000),
                m=Math.floor((ms%3600000)/60000),s=Math.floor((ms%60000)/1000);
    return`${String(d).padStart(2,'0')}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
}

// Build speaking exam entries from saved dates
function buildSpeakingExams() {
    const result = [];
    const saved = load(SPEAKING_KEY);
    MFL_SUBJECTS.forEach(subj => {
        const entry = saved[subj];
        if (!entry) return;
        // entry may be a legacy string 'YYYY-MM-DD' or 'DD/MM', or an object {date: 'YYYY-MM-DD'|'DD/MM', time: 'HH:MM'}
        let dateStr, timeStr;
        if (typeof entry === 'string') {
            dateStr = entry;
            timeStr = '09:00';
        } else if (typeof entry === 'object' && entry.date) {
            dateStr = entry.date;
            timeStr = entry.time || '09:00';
        } else {
            return;
        }

        // Parse date formats: either YYYY-MM-DD or DD/MM
        let dd, mm, yyyy = 2026;
        if (dateStr.includes('-')) {
            const parts = dateStr.split('-').map(Number);
            if (parts.length === 3) { yyyy = parts[0]; mm = parts[1]; dd = parts[2]; }
            else return;
        } else if (dateStr.includes('/')) {
            const parts = dateStr.split('/').map(Number);
            if (parts.length === 2) { dd = parts[0]; mm = parts[1]; }
            else return;
        } else return;

        if (!dd || !mm) return;
        const [hours, minutes] = (timeStr || '09:00').split(':').map(Number);
        const start = new Date(2026, mm-1, dd, Number.isFinite(hours) ? hours : 9, Number.isFinite(minutes) ? minutes : 0, 0, 0);
        const end = new Date(start.getTime() + 30*60000); // 30 min
        // Find a base code for this subject from RAW_EXAMS (first matching) to preserve code prefix
        let codePrefix = 'SPEAK';
        for (let i = 0; i < RAW_EXAMS.length; i++) {
            if (RAW_EXAMS[i].subject === subj) { codePrefix = RAW_EXAMS[i].code.split('/')[0]; break; }
        }

        if (!activeFilters.has(subj)) return;

        result.push({
            date: `${String(dd).padStart(2,'0')}/${String(mm).padStart(2,'0')}`,
            board: 'AQA',
            level: 'GCSE',
            code: `${codePrefix}/SH`,
            subject: subj,
            component: 'Speaking Exam',
            session: fmtTime(start),
            durationMin: 30,
            start, end,
            isSpeaking: true,
        });
    });
    return result;
}

const baseExams = RAW_EXAMS.map(e=>{
    const start=makeStart(e.date,e.session);
    const end=new Date(start.getTime()+e.durationMin*60000);
    return{...e,start,end};
}).sort((a,b)=>a.start-b.start);

// exams = base + speaking; rebuilt when speaking dates change
let exams = baseExams.slice();

function rebuildExams() {
    const speaking = buildSpeakingExams();
    exams = [...baseExams, ...speaking].sort((a,b)=>a.start-b.start);
    // Rebuild prevStates for new exams
    exams.forEach(e=>{ if(!(e.code in prevStates)) prevStates[e.code]=getState(e.start,e.end,Date.now()); });
}

// Collect all subjects that actually appear in the data
const ALL_SUBJECTS=[...new Set(baseExams.map(e=>e.subject))];

let activeFilters=load(STORAGE_KEY) || [];
let lastFilterCount = activeFilters.size;
activeFilters.forEach(s=>{if(!ALL_SUBJECTS.includes(s))activeFilters.delete(s);});

let calMode = load(CAL_KEY);
if (calMode) {document.body.classList.replace('compact', 'cal') ? null:document.body.classList.add('cal')};

let legacyCalMode = load(LEGACY_CAL_KEY);

let compactMode = calMode || legacyCalMode ? 0:load(COMPACT_KEY);
if(compactMode) {document.body.classList.replace('cal', 'compact') ? null:document.body.classList.add('compact')};

let weekends = load(WEEKENDS_KEY);

let showOtherExams = load(SHOW_OTHER_EXAMS_KEY);

let progressMode = load(PROGRESS_KEY);
if (progressMode) {document.body.classList.add('progress')};

let plannerMode = 0;

// ── DOM refs ─────────────────────────────────────────────────────────────────
const clearBtnWrap = document.getElementById('clearBtnWrap');
const filterCountEl = document.getElementById('filterCount');
const defaultbtn = document.getElementById('defaultbtn');
const compactbtn = document.getElementById('compactbtn');
const calbtn = document.getElementById('calbtn');
const progressbtn = document.getElementById('progressbtn');
const toggleMenusBtn = document.getElementById('toggleMenusBtn');
const quickLinksMenu = document.querySelector('.quick-links-menu');
const countdownsMenu = document.querySelector('.countdowns-menu');
const legacyCalToggle = document.getElementById('legacyCalToggle');
const filterCatsEl = document.getElementById('filterCategories');
const plannerbtn = document.getElementById('rev-planner');
const speakingDatesEl = document.getElementById('speakingDates');

// Settings toggles (moved to controls)
const lightToggleTop = document.getElementById('lightToggleTop');
const showOtherExamsToggle = document.getElementById('showOtherExamsToggle');
const calModeOnly = document.querySelectorAll('.calModeOnly');
const weekendsToggle = document.getElementById('weekendsToggle');
if (weekendsToggle) weekendsToggle.addEventListener('change', e => setWeekends(e.target.checked));

// ── Sync toggle initial states ────────────────────────────────────────────────
function syncAllToggles() {
    // Light mode
    const isLight = document.documentElement.classList.contains('light');
    if (lightToggleTop) lightToggleTop.checked = isLight;
    
    if (legacyCalToggle) legacyCalToggle.checked = legacyCalMode;
    if (showOtherExamsToggle) showOtherExamsToggle.checked = showOtherExams;
    if (weekendsToggle) weekendsToggle.checked = weekends;
    
    // Show "Show Other Exams" toggle only in calendar mode
    if (calModeOnly) {
        calModeOnly.forEach((el) => {el.style.display = calMode ? 'flex' : 'none'});
    }
}

syncAllToggles();

// Show progress tracker container on load if progress mode is active
const progressContainer = document.getElementById('progressTrackerContainer');
if (progressContainer && progressMode) {
    progressContainer.style.display = 'block';
}

// ── Light mode handlers ────────────────────────────────────────────────────────
function setLightMode(on) {
    document.documentElement.classList.toggle('light', on);
    document.documentElement.classList.toggle('dark', !on);
    if (lightToggleTop) lightToggleTop.checked = on;
    lightMode = on ? 1 : 0;
    save(LIGHT_KEY, lightMode);
}

if (lightToggleTop) lightToggleTop.addEventListener('change', e => setLightMode(e.target.checked));

function setShowOtherExams(on) {
    showOtherExams = on ? 1 : 0;
    if (showOtherExamsToggle) showOtherExamsToggle.checked = on;
    save(SHOW_OTHER_EXAMS_KEY, showOtherExams);
    renderExams();
}

function setWeekends(on) {
    weekends = on ? 1 : 0;
    const weekendsToggle = document.getElementById('weekendsToggle');
    if (weekendsToggle) weekendsToggle.checked = on;
    save(WEEKENDS_KEY, weekends);
    const calendarTable = document.getElementById('calendar');
    const multiCalendar = document.querySelector('.continuous-calendar');
    if (on) {
        if (calendarTable) calendarTable.classList.add('hide-weekends');
        if (multiCalendar) multiCalendar.classList.add('hide-weekends');
    } else {
        if (calendarTable) calendarTable.classList.remove('hide-weekends');
        if (multiCalendar) multiCalendar.classList.remove('hide-weekends');
    }
}

if (showOtherExamsToggle) {
    showOtherExamsToggle.addEventListener('change', e => setShowOtherExams(e.target.checked));
}
    

function setLegacyCalMode(on) {
    legacyCalMode = on ? 1 : 0;
    if (legacyCalToggle) legacyCalToggle.checked = on;
    if (!calMode) setCalMode(true);
    save(LEGACY_CAL_KEY, legacyCalMode);
    renderExams();
}
if (legacyCalToggle) {
    legacyCalToggle.addEventListener('change', e => {
        setLegacyCalMode(e.target.checked);
    });
}

// ── Default mode ──────────────────────────────────────────────────────────────
function setDefaultMode(on) {
    if (on) {
        compactMode = 0;
        calMode = 0;
        progressMode = 0;
        document.body.classList.remove('compact', 'cal', 'multical', 'progress');
        if(compactbtn) compactbtn.classList.remove('active');
        if(calbtn) calbtn.classList.remove('active');
        if(progressbtn) progressbtn.classList.remove('active');
        if(progressContainer) progressContainer.style.display = 'none';
    }
    if(defaultbtn) defaultbtn.classList.toggle('active', !!on);

    if (calModeOnly) {
        calModeOnly.forEach((el) => {el.style.display = calMode ? 'flex' : 'none'});
    }

    save(COMPACT_KEY, compactMode);
    save(CAL_KEY, calMode);
    save(PROGRESS_KEY, progressMode);
    renderExams();
}

// ── Compact mode ──────────────────────────────────────────────────────────────
function setCompactMode(on) {
    compactMode = on ? 1 : 0;
    if (on) {
        calMode = 0;
        progressMode = 0;
        document.body.classList.remove('cal', 'multical', 'progress');
        document.body.classList.add('compact');
        if(calbtn) calbtn.classList.remove('active');
        if(progressbtn) progressbtn.classList.remove('active');
        if(defaultbtn) defaultbtn.classList.remove('active');
        if(progressContainer) progressContainer.style.display = 'none';
    } else {
        document.body.classList.remove('compact');
        if(defaultbtn) defaultbtn.classList.add('active');
    }
    if(compactbtn) compactbtn.classList.toggle('active', !!on);

    if (calModeOnly) {
        calModeOnly.forEach((el) => {el.style.display = calMode ? 'flex' : 'none'});
    }

    save(COMPACT_KEY, compactMode);
    save(CAL_KEY, calMode);
    save(PROGRESS_KEY, progressMode);
    renderExams();
}

// ── Calendar mode ─────────────────────────────────────────────────────────────
function setCalMode(on) {
    calMode = on ? 1 : 0;
    if (on) {
        compactMode = 0;
        progressMode = 0;
        document.body.classList.remove('compact', 'multical', 'progress');
        document.body.classList.add('cal');
        if(compactbtn) compactbtn.classList.remove('active');
        if(progressbtn) progressbtn.classList.remove('active');
        if(defaultbtn) defaultbtn.classList.remove('active');
        if(progressContainer) progressContainer.style.display = 'none';
    } else {
        document.body.classList.remove('cal');
        if(defaultbtn) defaultbtn.classList.add('active');
    }
    if(calbtn) calbtn.classList.toggle('active', !!on);
    
    // Show/hide "Show Other Exams" toggle based on calendar mode
    if (calModeOnly) {
        calModeOnly.forEach((el) => {el.style.display = calMode ? 'flex' : 'none'});
    }
    
    save(CAL_KEY, calMode);
    save(COMPACT_KEY, compactMode);
    save(PROGRESS_KEY, progressMode);
    renderExams();
}

// ── Progress tracker mode ──────────────────────────────────────────────────────
function setProgressMode(on) {
    progressMode = on ? 1 : 0;
    if (on) {
        compactMode = 0;
        calMode = 0;
        document.body.classList.remove('compact', 'cal', 'multical');
        document.body.classList.add('progress');
        if(compactbtn) compactbtn.classList.remove('active');
        if(calbtn) calbtn.classList.remove('active');
        if(defaultbtn) defaultbtn.classList.remove('active');
    } else {
        document.body.classList.remove('progress');
        if(defaultbtn) defaultbtn.classList.add('active');
    }
    if(progressbtn) progressbtn.classList.toggle('active', !!on);
    
    // Show/hide progress tracker container
    const progressContainer = document.getElementById('progressTrackerContainer');
    if (progressContainer) progressContainer.style.display = on ? 'block' : 'none';
    
    save(PROGRESS_KEY, progressMode);
    save(COMPACT_KEY, compactMode);
    save(CAL_KEY, calMode);
    renderExams();
    if (on) renderProgressTracker();
}

if (calbtn) calbtn.addEventListener('click', () => setCalMode(!calMode));
if (compactbtn) compactbtn.addEventListener('click', () => setCompactMode(!compactMode));
if (progressbtn) progressbtn.addEventListener('click', () => setProgressMode(!progressMode));
if (defaultbtn) defaultbtn.addEventListener('click', () => setDefaultMode(true));

// Keyboard shortcuts: z = default, x = compact, c = calendar, d = legacy calendar, l = light mode, e = legacy ui, s = show other exams, a = weekends only, p = progress
document.addEventListener('keydown', (e) => {
    if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        setDefaultMode(true);
    } else if (e.key === 'x' || e.key === 'X') {
        e.preventDefault();
        setCompactMode(!compactMode);
    } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setCalMode(!calMode);
    } else if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setLegacyCalMode(!legacyCalMode);
    } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        const isLight = document.documentElement.classList.contains('light');
        setLightMode(!isLight);
    } else if (e.key === 'e' || e.key === 'E') {
        toggleMenusVisibility();
    } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        setShowOtherExams(!showOtherExams);
    } else if (e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        setWeekends(!weekends);
    } else if (e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        setProgressMode(!progressMode);
    }
    
});

// Initialize button active states on page load
const isDefaultMode = !compactMode && !calMode && !progressMode;
if (isDefaultMode && defaultbtn) defaultbtn.classList.add('active');
if (calMode && calbtn) calbtn.classList.add('active');
if (compactMode && compactbtn) compactbtn.classList.add('active');
if (progressMode && progressbtn) progressbtn.classList.add('active');
if (legacyCalMode && legacyCalToggle) legacyCalToggle.classList.add('active');

// ── Speaking exam date selectors ──────────────────────────────────────────────
function getActiveMFLSubjects() {
    if (activeFilters.size === 0) return [];
    return MFL_SUBJECTS.filter(s => activeFilters.has(s));
}

function renderSpeakingDates() {
    speakingDatesEl.innerHTML = '';
    const mflActive = getActiveMFLSubjects();
    if (!mflActive.length) return;

    const saved = load(SPEAKING_KEY);

    const wrapper = document.createElement('div');
    wrapper.className = 'speaking-dates-wrapper';

    const header = document.createElement('div');
    header.className = 'speaking-dates-header';
    header.innerHTML = `<span class="speaking-dates-label"><i class="fas fa-microphone"></i> Speaking Exam Dates</span>
        <span class="speaking-dates-hint">Set your speaking exam date to add it to the list</span>`;
    wrapper.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'speaking-dates-grid';

    mflActive.forEach(subj => {
        const row = document.createElement('div');
        row.className = 'speaking-date-row';

        const label = document.createElement('label');
        label.className = 'speaking-date-label';
        label.textContent = subj;

        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.className = 'speaking-date-input';
        dateInput.dataset.subject = subj;
        dateInput.min = '2026-01-01';
        dateInput.max = '2026-12-31';

        const timeInput = document.createElement('input');
        timeInput.type = 'time';
        timeInput.className = 'speaking-time-input';
        timeInput.dataset.subject = subj;

        // Populate values from saved which may be legacy string or object
        if (saved[subj]) {
            if (typeof saved[subj] === 'string') {
                // legacy DD/MM or YYYY-MM-DD format
                if (saved[subj].includes('-')) {
                    dateInput.value = saved[subj]; // already YYYY-MM-DD
                } else if (saved[subj].includes('/')) {
                    const parts = saved[subj].split('/');
                    if (parts.length === 2) dateInput.value = `2026-${parts[1].padStart(2,'0')}-${parts[0].padStart(2,'0')}`;
                }
                timeInput.value = '09:00';
            } else if (typeof saved[subj] === 'object') {
                // saved.date might be YYYY-MM-DD or DD/MM
                if (saved[subj].date) {
                    if (saved[subj].date.includes('-')) {
                        dateInput.value = saved[subj].date;
                    } else if (saved[subj].date.includes('/')) {
                        const parts = saved[subj].date.split('/');
                        if (parts.length === 2) dateInput.value = `2026-${parts[1].padStart(2,'0')}-${parts[0].padStart(2,'0')}`;
                    }
                }
                timeInput.value = saved[subj].time || '09:00';
            }
        }

        function commit() {
            const val = (dateInput.value || '').trim();
            if (!val || !/^\d{4}-\d{2}-\d{2}$/.test(val)) return;
            const [yyyy, mm, dd] = val.split('-').map(Number);
            if (!dd || !mm || mm < 1 || mm > 12 || dd < 1 || dd > 31 || yyyy !== 2026) return;
            const newSaved = load(SPEAKING_KEY);
            newSaved[subj] = { date: val, time: timeInput.value || '09:00' };
            save(SPEAKING_KEY, newSaved);
            rebuildExams();
            renderExams();
        }

        dateInput.addEventListener('change', commit);
        timeInput.addEventListener('change', () => {
            if (dateInput.value) commit();
        });

        // Clear button
        const clearBtn = document.createElement('button');
        clearBtn.className = 'speaking-date-clear';
        clearBtn.title = 'Clear date';
        clearBtn.innerHTML = '<i class="fas fa-times"></i>';
        clearBtn.style.display = dateInput.value ? '' : 'none';
        clearBtn.addEventListener('click', () => {
            dateInput.value = '';
            timeInput.value = '09:00';
            clearBtn.style.display = 'none';
            const newSaved = load(SPEAKING_KEY);
            delete newSaved[subj];
            save(SPEAKING_KEY, newSaved);
            rebuildExams();
            renderExams();
        });
        dateInput.addEventListener('input', () => {
            clearBtn.style.display = dateInput.value ? '' : 'none';
        });

        row.appendChild(label);
        row.appendChild(dateInput);
        row.appendChild(timeInput);
        row.appendChild(clearBtn);
        grid.appendChild(row);
    });

    wrapper.appendChild(grid);
    speakingDatesEl.appendChild(wrapper);
}

// ── Smooth clear button animation ────────────────────────────────────────────
let clearRaf=null;
function setClearVisible(show){
    if(clearRaf){cancelAnimationFrame(clearRaf);clearRaf=null;}
    const wrap=clearBtnWrap;
    if(show){
        wrap.style.transition='none';
        wrap.style.height='auto';
        const h=wrap.scrollHeight;
        wrap.style.height='0';
        wrap.style.marginTop='0';
        wrap.offsetHeight;
        clearRaf=requestAnimationFrame(()=>{
            wrap.style.transition='height 0.35s cubic-bezier(0.25,0.46,0.45,0.94),margin-top 0.35s cubic-bezier(0.25,0.46,0.45,0.94)';
            wrap.style.height=h+'px';
            wrap.style.marginTop='12px';
            wrap.classList.add('open');
        });
    } else {
        wrap.style.transition='none';
        wrap.style.height=wrap.scrollHeight+'px';
        wrap.style.marginTop='12px';
        wrap.offsetHeight;
        clearRaf=requestAnimationFrame(()=>{
            wrap.style.transition='height 0.3s cubic-bezier(0.25,0.46,0.45,0.94),margin-top 0.3s cubic-bezier(0.25,0.46,0.45,0.94)';
            wrap.style.height='0';
            wrap.style.marginTop='0';
            wrap.classList.remove('open');
        });
    }
}

function updateClearBtn(){
    const current = activeFilters.size;
    if ((lastFilterCount === 0 && current > 0) ||
            (lastFilterCount > 0 && current === 0)) {
        setClearVisible(current > 0);
    }
    lastFilterCount = current;
}

function updateFilterCount(){
    const n=activeFilters.size;
    filterCountEl.innerHTML=`<strong>${n}</strong> selected`;
    filterCountEl.classList.toggle('visible',n>0);
}

// ── Build filter UI by category ───────────────────────────────────────────────
const subjectBtnMap={};

function isCatFullyActive(subjects){
    const present=subjects.filter(s=>ALL_SUBJECTS.includes(s));
    return present.length>0 && present.every(s=>activeFilters.has(s));
}

function refreshCategoryLabels(){
    CATEGORIES.forEach(cat=>{
        const el=document.getElementById('catlabel-'+cat.name);
        if(!el)return;
        const present=cat.subjects.filter(s=>ALL_SUBJECTS.includes(s));
        if(!present.length)return;
        el.classList.toggle('cat-active', present.every(s=>activeFilters.has(s)));
    });
}

CATEGORIES.forEach(cat=>{
    const present=cat.subjects.filter(s=>ALL_SUBJECTS.includes(s));
    if(!present.length)return;

    const section=document.createElement('div');
    section.className='filter-category';

    const header=document.createElement('div');
    header.className='category-header';

    const labelBtn=document.createElement('button');
    labelBtn.className='category-label-btn';
    labelBtn.id='catlabel-'+cat.name;
    labelBtn.textContent=cat.name;
    labelBtn.title=`Select all ${cat.name}`;

    labelBtn.addEventListener('click',()=>{
        const allActive=present.every(s=>activeFilters.has(s));
        present.forEach(s=>{
            if(allActive){ activeFilters.delete(s); subjectBtnMap[s]&&subjectBtnMap[s].classList.remove('active'); }
            else                 { activeFilters.add(s);        subjectBtnMap[s]&&subjectBtnMap[s].classList.add('active'); }
        });
        refreshCategoryLabels();
        updateClearBtn(); updateFilterCount(); save(STORAGE_KEY, activeFilters); renderExams(); renderSpeakingDates();
    });

    const line=document.createElement('div');
    line.className='category-line';

    header.appendChild(labelBtn);
    header.appendChild(line);
    section.appendChild(header);

    const grid=document.createElement('div');
    grid.className='filter-grid';

    present.forEach(subj=>{
        const btn=document.createElement('button');
        btn.textContent=subj;
        btn.className='filter-btn'+(activeFilters.has(subj)?' active':'');
        subjectBtnMap[subj]=btn;
        btn.addEventListener('click',()=>{
            if(btn.classList.contains('active')){ btn.classList.remove('active'); activeFilters.delete(subj); }
            else { btn.classList.add('active'); activeFilters.add(subj); }
            refreshCategoryLabels();
            updateClearBtn(); updateFilterCount(); save(STORAGE_KEY, activeFilters); renderExams(); renderSpeakingDates();
        });
        grid.appendChild(btn);
    });

    section.appendChild(grid);
    filterCatsEl.appendChild(section);
});

refreshCategoryLabels();

document.getElementById('clearFilters').addEventListener('click',()=>{
    activeFilters.clear();
    Object.values(subjectBtnMap).forEach(b=>b.classList.remove('active'));
    refreshCategoryLabels();
    updateClearBtn(); updateFilterCount(); save(STORAGE_KEY, activeFilters); renderExams(); renderSpeakingDates();
});

// ── Filter collapse button (mobile) ──────────────────────────────────────────
// Toggle menus visibility
function toggleMenusVisibility() {
    // flip state
    hideMenus = !hideMenus;
    if (quickLinksMenu) quickLinksMenu.classList.toggle('hidden', hideMenus);
    if (countdownsMenu) countdownsMenu.classList.toggle('hidden', hideMenus);
    if (hideMenusToggle) hideMenusToggle.checked = hideMenus;
    updateSidebarVisibility();
    save(HIDE_MENUS_KEY, hideMenus);
}

if (toggleMenusBtn) {
    toggleMenusBtn.addEventListener('click', toggleMenusVisibility);
}

const filterCollapseBtn = document.getElementById('filterCollapseBtn');
const hideMenusToggle = document.getElementById('hideMenusToggle');

// initialize hide menus state
let hideMenus = load(HIDE_MENUS_KEY);
function updateSidebarVisibility() {
    const sidebarCountdowns = document.getElementById('sidebarCountdownsWrapper');
    const sidebarLinks = document.getElementById('sidebarLinksWrapper');
    if (hideMenus) {
        if (quickLinksMenu) quickLinksMenu.classList.add('hidden');
        if (countdownsMenu) countdownsMenu.classList.add('hidden');
        if (sidebarCountdowns) sidebarCountdowns.style.display = '';
        if (sidebarLinks) sidebarLinks.style.display = '';
    } else {
        if (quickLinksMenu) quickLinksMenu.classList.remove('hidden');
        if (countdownsMenu) countdownsMenu.classList.remove('hidden');
        if (sidebarCountdowns) sidebarCountdowns.style.display = 'none';
        if (sidebarLinks) sidebarLinks.style.display = 'none';
    }
}

updateSidebarVisibility();

if (hideMenusToggle) {
    hideMenusToggle.checked = hideMenus;
    hideMenusToggle.addEventListener('change', (e) => {
        hideMenus = e.target.checked;
        updateSidebarVisibility();
        save(HIDE_MENUS_KEY, hideMenus);
    });
}
const filterCatsEl_ref = document.getElementById('filterCategories');
const speakingDatesEl_ref = document.getElementById('speakingDates');

function setFilterCollapsed(collapsed) {
    if (collapsed) {
        filterCatsEl_ref.classList.add('collapsed');
        speakingDatesEl_ref.classList.add('collapsed');
        filterCollapseBtn.classList.add('collapsed');
    } else {
        filterCatsEl_ref.classList.remove('collapsed');
        speakingDatesEl_ref.classList.remove('collapsed');
        filterCollapseBtn.classList.remove('collapsed');
    }
    save(FILTER_COLLAPSED_KEY, collapsed);
}

filterCollapseBtn.addEventListener('click', () => {
    const isCollapsed = filterCatsEl_ref.classList.contains('collapsed');
    setFilterCollapsed(!isCollapsed);
});

// Load initial state
if (load(FILTER_COLLAPSED_KEY)) {
    setFilterCollapsed(true);
}

// Init clear btn without animation
clearBtnWrap.style.transition='none';
clearBtnWrap.style.height=activeFilters.size>0?'auto':'0';
clearBtnWrap.style.marginTop=activeFilters.size>0?'12px':'0';
if(activeFilters.size>0)clearBtnWrap.classList.add('open');
updateFilterCount();

// Init speaking dates and exams
rebuildExams();
renderSpeakingDates();

// Top bar close (persisted)
const topBar = document.querySelector('.top-bar');
const topBarClose = document.getElementById('topBarClose');
if (load(TOPBAR_KEY)) {
    if (topBar) topBar.style.display = 'none';
}
if (topBarClose) {
    topBarClose.addEventListener('click', () => {
        if (topBar) topBar.style.display = 'none';
        save(TOPBAR_KEY, true);
    });
}


let monthOffset = 0;

// ── Render ────────────────────────────────────────────────────────────────────
let currentFiltered = exams.slice();

function renderMultiMonthCalendar(list, active, filtered) {
    const wrapper = document.createElement('div');
    wrapper.className = 'multi-calendar-wrapper';

    // Use ALL exams (including over) for full calendar
    let allExamsForCalendar = activeFilters.size === 0 ? exams : exams.filter(e => activeFilters.has(e.subject));
    
    // If "Show Other Exams" is enabled and there are active filters, also include filtered-out exams
    let otherExams = [];
    if (showOtherExams && activeFilters.size > 0) {
        otherExams = exams.filter(e => !activeFilters.has(e.subject));
        allExamsForCalendar = [...allExamsForCalendar, ...otherExams];
    }

    // Always show April, May, June 2026
    const sortedMonths = [4, 5, 6].map(m => new Date(2026, m - 1, 1));

    // Mon=0 … Sun=6
    function dayCol(date) {
        let d = date.getDay();
        return d === 0 ? 6 : d - 1;
    }

    const today = new Date();

    // Build one single table. Each week is one <tr> with 8 cells:
    //   cell 0 = month-label column (empty most rows, shows month name on first row of each month)
    //   cells 1–7 = Mon–Sun
    const table = document.createElement('table');
    table.className = 'multi-calendar continuous-calendar' + (weekends ? ' hide-weekends' : '');

    // Header row — 8 cols: label col + 7 day names
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const labelTh = document.createElement('th');
    labelTh.className = 'cal-month-col';
    headerRow.appendChild(labelTh);
    ['MON','TUE','WED','THU','FRI','SAT','SUN'].forEach(name => {
        const th = document.createElement('th');
        th.textContent = name;
        headerRow.appendChild(th);
    });

    const tbody = table.createTBody();

    // Track cells for exam injection: { "day/month": td }
    const cellMap = {};

    sortedMonths.forEach((monthStart, mIdx) => {
        const month = monthStart.getMonth();
        const year = monthStart.getFullYear();

        let cursor = new Date(year, month, 1);
        let firstWeekOfMonth = true;
        // For mid-week starts, we defer writing the label to the next row
        let deferredLabel = null;

        while (cursor.getMonth() === month) {
            const col = dayCol(cursor);

            const needNewRow = col === 0 || tbody.rows.length === 0;

            if (needNewRow) {
                const tr = tbody.insertRow();

                // Month-label cell
                const labelTd = document.createElement('td');
                labelTd.className = 'cal-month-col';

                // Write any deferred label from the previous month's mid-week start
                if (deferredLabel) {
                    labelTd.textContent = deferredLabel;
                    deferredLabel = null;
                } else if (firstWeekOfMonth && mIdx > 0 && col === 0) {
                    // Month starts exactly on Monday — label goes here (same row as day 1)
                    labelTd.textContent = monthStart.toLocaleString('default', { month: 'short' }).toUpperCase();
                } else if (firstWeekOfMonth && mIdx === 0) {
                    // Very first month ever — label goes on first row
                    labelTd.textContent = monthStart.toLocaleString('default', { month: 'short' }).toUpperCase();
                }

                if (firstWeekOfMonth) firstWeekOfMonth = false;
                tr.appendChild(labelTd);

                // For the very first row only: pad Mon→(col-1) with empty cells
                if (tbody.rows.length === 1 && col > 0) {
                    for (let i = 0; i < col; i++) {
                        const td = document.createElement('td');
                        td.className = 'empty';
                        tr.appendChild(td);
                    }
                }
            } else if (firstWeekOfMonth) {
                // First day of a non-first month continuing mid-row.
                // Defer the label to the next row (below the boundary line).
                firstWeekOfMonth = false;
                deferredLabel = monthStart.toLocaleString('default', { month: 'short' }).toUpperCase();
                // Leave the current row's label cell empty — it belongs to the previous month's week
            }

            // Append the day cell to the current row
            const currentRow = tbody.rows[tbody.rows.length - 1];
            const td = document.createElement('td');
            const isToday = cursor.getFullYear() === today.getFullYear() &&
                            cursor.getMonth() === today.getMonth() &&
                            cursor.getDate() === today.getDate();
            td.className = isToday ? 'curMonth today' : 'curMonth';
            if (cursor.getDate() === 1 && mIdx > 0) {
                td.classList.add('month-start');
                td.dataset.monthStartCol = col;
            }
            td.dataset.day = cursor.getDate();
            td.dataset.month = cursor.getMonth() + 1;
            td.textContent = cursor.getDate();
            currentRow.appendChild(td);

            cellMap[`${cursor.getDate()}/${cursor.getMonth() + 1}`] = td;

            cursor.setDate(cursor.getDate() + 1);
        }
    });

    // ── Post-process: draw the ⌐-shaped month boundary borders ──────────────────
    // For a month starting on col C:
    //   - border-top on day 1 and everything to its right in that row
    //   - border-top on the label cell of that same row
    //   - if C > 0: border-top on label + cols 0..(C-1) in the NEXT row
    //   - NO left border on day 1
    //   - the label cell of the start row gets NO border-top (it's above the line for mid-week;
    //     for Monday starts the label IS on the border row so it does get it)

    const allRows = Array.from(tbody.rows);
    allRows.forEach((row, rowIdx) => {
        const startCell = Array.from(row.cells).find(c => c.classList.contains('month-start'));
        if (!startCell) return;

        const startCol = parseInt(startCell.dataset.monthStartCol); // 0=Mon…6=Sun
        const startCellIdx = startCol + 1; // +1 for label column at index 0

        if (startCol === 0) {
            // Month starts on Monday — border runs along top of entire row including label
            for (let i = 0; i < row.cells.length; i++) {
                row.cells[i].classList.add('month-border-top');
            }
        } else {
            // Month starts mid-week:
            // border-top + border-left on day 1 (the corner of the ⌐ shape)
            startCell.classList.add('month-border-left');
            // border-top on day 1 and everything to its right in this row
            for (let i = startCellIdx; i < row.cells.length; i++) {
                row.cells[i].classList.add('month-border-top');
            }
            // border-top on label + cols 0..(startCol-1) in the NEXT row
            if (rowIdx + 1 < allRows.length) {
                const nextRow = allRows[rowIdx + 1];
                nextRow.cells[0].classList.add('month-border-top');
                for (let i = 1; i <= startCol; i++) {
                    if (nextRow.cells[i]) nextRow.cells[i].classList.add('month-border-top');
                }
            }
            // The label cell on THIS row gets no border (it's above the line, in the previous month's territory)
        }
    });

    wrapper.appendChild(table);
    list.appendChild(wrapper);

    // Inject exam pills into the correct cells
    allExamsForCalendar.forEach(ex => {
        const [eDay, eMonth] = ex.date.split('/').map(Number);
        const td = cellMap[`${eDay}/${eMonth}`];
        if (!td) return;

        const examDiv = document.createElement('div');
        examDiv.className = 'cal-exam';
        
        // Add "other-exam" class if this exam is from a filtered-out subject
        const isOtherExam = activeFilters.size > 0 && !activeFilters.has(ex.subject);
        if (isOtherExam) {
            examDiv.classList.add('other-exam');
        }
        
        examDiv.dataset.code = ex.code;
        const now = Date.now();
        const state = getState(ex.start, ex.end, now);
        const statusBadge = state === 'inprogress'
            ? `<span class="status-badge inprogress">● IN PROGRESS</span>`
            : state === 'over' ? `<span class="status-badge over">EXAM OVER</span>` : '';
        const msLeft = ex.start - now;
        const timerText = state === 'upcoming' ? fmtCountdown(msLeft) : '–';
        const frac = state === 'upcoming' ? getFrac(msLeft) : 0;
        const color = state === 'upcoming' ? fracToColor(frac) : state === 'inprogress' ? '#a855f7' : '#3b82f6';
        
        // Only set border color for non-"other-exam" exams
        if (!isOtherExam) {
            examDiv.style.borderLeftColor = color;
        }
        
        examDiv.innerHTML = `<span class="cal-exam-subject">${ex.subject}</span><span class="cal-exam-component">${ex.component}</span>`;
        examDiv.innerHTML += `<div class="cal-exam-tooltip" style="border-left-color: ${color}">
            <div class="cal-tooltip-top">
                <div class="cal-tooltip-title-block">
                    <span class="exam-subject">${ex.subject}</span>
                    <span class="exam-component">${ex.component}</span>
                </div>
                ${statusBadge}
            </div>
            <div class="exam-meta">
                <span class="badge"><i class="fas fa-calendar"></i> ${ex.date}/26</span>
                <span class="badge"><i class="fas fa-scroll"></i> ${ex.board} ${ex.level}</span>
                <span class="badge"><i class="fas fa-code"></i> ${ex.code}</span>
                <span class="badge"><i class="fas fa-clock"></i> ${fmtTime(ex.start)} – ${fmtTime(ex.end)}</span>
                <span class="badge"><i class="fas fa-hourglass"></i> ${fmtDuration(ex.durationMin)}</span>
            </div>
            <div class="countdown-block">
                <span class="countdown-timer${state !== 'upcoming' ? ' dim' : ''}" data-code="${ex.code}">${timerText}</span>
                <div class="progress-wrap"><div class="progress-bar" data-bar="${ex.code}" style="width:${(getFrac(msLeft)*100).toFixed(3)}%;background:${fracToColor(getFrac(msLeft))}"></div></div>
            </div>
        </div>`;
        td.appendChild(examDiv);
    });
}

function renderExams(){
    const list=document.getElementById('examList'),
        emptyEl=document.getElementById('emptyState'),
        countInfo=document.getElementById('countInfo');
    list.innerHTML='';
    const now=Date.now();
    const filtered=activeFilters.size===0?exams:exams.filter(e=>activeFilters.has(e.subject));
    currentFiltered = filtered;
    if(!filtered.length){emptyEl.style.display='block';countInfo.textContent='';return;}

    emptyEl.style.display='none';
    const upcoming =filtered.filter(e=>getState(e.start,e.end,now)==='upcoming');
    const inprogress = filtered.filter(e=>getState(e.start,e.end,now)==='inprogress');
    const over =filtered.filter(e=>getState(e.start,e.end,now)==='over');

    countInfo.innerHTML=
        `Showing <strong>${filtered.length}</strong> exam${filtered.length!==1?'s':''} &nbsp;·&nbsp; `+
        `<strong>${over.length}</strong> over &nbsp;·&nbsp; `+
        `<strong>${inprogress.length}</strong> in progress &nbsp;·&nbsp; `+
        `<strong>${upcoming.length}</strong> upcoming`;
    
    const halfTermStartMs = HALF_TERM_START.getTime();
    let active = [...inprogress,...upcoming];
    let halfTermInserted = false;

    // In calendar mode include finished (over) exams as well
    if (calMode) {
        active = filtered.slice();
        
        // If "Show Other Exams" is enabled, also include other exams
        if (showOtherExams && activeFilters.size > 0) {
            const otherExams = exams.filter(e => !activeFilters.has(e.subject));
            active = [...active, ...otherExams];
        }
    }

    if (!calMode) {
        active.forEach((e,i)=>{
            if(!halfTermInserted && e.start.getTime() >= halfTermStartMs){
                const div=document.createElement('div');
                div.className='section-divider half-term-divider';
                div.innerHTML='<i class="fas fa-leaf"></i> Half Term';
                list.appendChild(div);
                halfTermInserted=true;
            }
            list.appendChild(makeCard(e,i));
        });
        if(over.length){
            const div=document.createElement('div');div.className='section-divider';div.textContent='Exam Over';
            list.appendChild(div);
            over.slice().reverse().forEach((e,i)=>list.appendChild(makeCard(e,inprogress.length+upcoming.length+i)));
        }
    } else {
        if (!legacyCalMode) {
        renderMultiMonthCalendar(list, active, filtered);
        } else {
        const div = document.createElement('div');
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className="buttonsDiv";
        const monthBackBtn = document.createElement('button');
        monthBackBtn.id='monthBackBtn';
        monthBackBtn.textContent='← Prev';

        const monthText = document.createElement('p');
        monthText.textContent="Loading..."
        const monthFwdBtn = document.createElement('button');
        monthFwdBtn.id='monthFwdBtn';
        monthFwdBtn.textContent='Next →';
        buttonsDiv.appendChild(monthBackBtn);
        buttonsDiv.appendChild(monthText);
        buttonsDiv.appendChild(monthFwdBtn);
        list.appendChild(buttonsDiv)

        div.className='calendar';
        function getDay(date) {let day = date.getDay(); if (day == 0) day = 7; return day - 1;}
        currentDate = new Date(Date.now());
        offsetDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+monthOffset, 1)
        monthText.textContent = offsetDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        monthBackBtn.addEventListener('click' ,() => {
            monthOffset -= 1;
            offsetDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+monthOffset, 1);
            monthText.textContent = offsetDate.toLocaleString('default', { month: 'long', year: 'numeric' });
            createCalendar(offsetDate.valueOf());
            addExams();
        })
        monthFwdBtn.addEventListener('click' ,() => {
            monthOffset += 1;
            offsetDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+monthOffset, 1);
            monthText.textContent = offsetDate.toLocaleString('default', { month: 'long', year: 'numeric' });
            createCalendar(offsetDate.valueOf());
            addExams();
        })
        function createCalendar(dateMS) {
            const today = new Date(Date.now());
            let date = new Date(dateMS);
            const curMonth = date.getMonth();
            let table = '<table id="calendar"' + (weekends ? ' class="hide-weekends"' : '') + '><tr><th>MONDAY</th><th>TUESDAY</th><th>WEDNESDAY</th><th>THURSDAY</th><th>FRIDAY</th><th>SATURDAY</th><th>SUNDAY</th></tr><tr>';
            for (let i = 0; i < getDay(date); i++) {table += '<td id="0 0">'+'</td>';}
            while (date.getMonth() == curMonth) {
                if (date.getFullYear() == today.getFullYear() && date.getMonth() == today.getMonth() && date.getDate() == today.getDate()) {
                    table += '<td class="curMonth today" id="' + date.getDate() + " "+ date.getMonth() + '">' + date.getDate() + '</td>';
                } else {
                    table += '<td class="curMonth" id="' + date.getDate() + " "+ date.getMonth() + '">' + date.getDate() + '</td>';
                }
                if (getDay(date) % 7 == 6) {table += '</tr><tr>';}
                date.setDate(date.getDate() + 1);
            }
            if (getDay(date) != 0) {
                for (let i = getDay(date); i < 7; i++) {
                    table += '<td class="nextMonth" id="' + date.getDate() + " " + date.getMonth() + '">' + Number(date.getDate()) + '</td>';
                    date.setDate(date.getDate() + 1);
                }
            }
            table += '</tr></table>';
            div.innerHTML = table;
            list.appendChild(div);
            // Add staggered animation delays to calendar rows
            const calTable = document.getElementById("calendar");
            if (calTable && calTable.rows) {
                for (let i = 0; i < calTable.rows.length; i++) {
                    calTable.rows[i].style.animationDelay = `${Math.min(i * 20, 300)}ms`;
                }
            }
        }
        
        function addExams() {
            let table = document.getElementById("calendar");
            for (let i=1, row; row=table.rows[i]; i++) {
                for (let j=0, col; col=row.cells[j]; j++) {
                    let nday = Number(col.id.split(" ")[0])
                    let nmonth = Number(col.id.split(" ")[1]) + 1
                    let examsOnDay = active.filter(e => [...e.date.split("/")][0] == nday && [...e.date.split("/")][1] == nmonth);
                    if (examsOnDay.length > 0) {
                        for (let i=0; i<examsOnDay.length; i++) {
                            const ex = examsOnDay[i];
                            const examDiv = document.createElement('div');
                            examDiv.className = 'cal-exam';
                            
                            // Add "other-exam" class if this exam is from a filtered-out subject
                            const isOtherExam = activeFilters.size > 0 && !activeFilters.has(ex.subject);
                            if (isOtherExam) {
                                examDiv.classList.add('other-exam');
                            }
                            
                            examDiv.dataset.code = ex.code;
                            const now = Date.now();
                            const state = getState(ex.start, ex.end, now);
                            const statusBadge = state === 'inprogress'
                            ? `<span class="status-badge inprogress">● IN PROGRESS</span>`
                            : state === 'over' ? `<span class="status-badge over">EXAM OVER</span>` : '';
                            const msLeft = ex.start - now;
                            const timerText = state === 'upcoming' ? fmtCountdown(msLeft) : '–';
                            const frac=state==='upcoming'?getFrac(msLeft):0;
                            const color=state==='upcoming'?fracToColor(frac):state==='inprogress'?'#a855f7':'#3b82f6';
                            
                            // Only set border color for non-"other-exam" exams
                            if (!isOtherExam) {
                                examDiv.style.borderLeftColor = color;
                            }
                            
                            examDiv.innerHTML = `<span class="cal-exam-subject">${ex.subject}</span><span class="cal-exam-component">${ex.component}</span>`;
                            examDiv.innerHTML += `<div class="cal-exam-tooltip" style="border-left-color: ${color}">
                                <div class="cal-tooltip-top">
                                    <div class="cal-tooltip-title-block">
                                        <span class="exam-subject">${ex.subject}</span>
                                        <span class="exam-component">${ex.component}</span>
                                    </div>
                                    ${statusBadge}
                                </div>
                                <div class="exam-meta">
                                    <span class="badge"><i class="fas fa-calendar"></i> ${ex.date}/26</span>
                                    <span class="badge"><i class="fas fa-scroll"></i> ${ex.board} ${ex.level}</span>
                                    <span class="badge"><i class="fas fa-code"></i> ${ex.code}</span>
                                    <span class="badge"><i class="fas fa-clock"></i> ${fmtTime(ex.start)} – ${fmtTime(ex.end)}</span>
                                    <span class="badge"><i class="fas fa-hourglass"></i> ${fmtDuration(ex.durationMin)}</span>
                                </div>
                                <div class="countdown-block">
                                    <span class="countdown-timer${state !== 'upcoming' ? ' dim' : ''}" data-code="${ex.code}">${timerText}</span>
                                    <div class="progress-wrap"><div class="progress-bar" data-bar="${ex.code}" style="width:${(getFrac(msLeft)*100).toFixed(3)}%;background:${fracToColor(getFrac(msLeft))}"></div></div>
                                </div>
                            </div>`;
                            col.appendChild(examDiv);
                        }
                    }
                }
            }
        }
        createCalendar(offsetDate.valueOf());
        addExams();
    }
    }

    // Update sidebar timers immediately after render
    updateSidebarTimers();

    // Re-render progress tracker whenever exams re-render (filter changes, etc.)
    if (progressMode) renderProgressTracker();
}

function makeCard(ex,idx){
    const now=Date.now(),state=getState(ex.start,ex.end,now),msLeft=ex.start-now;
    const frac=state==='upcoming'?getFrac(msLeft):0;
    const color=state==='upcoming'?fracToColor(frac):state==='inprogress'?'#a855f7':'#3b82f6';
    const card=document.createElement('div');
    card.className=`exam-card state-${state}${ex.isSpeaking?' speaking-card':''}`;
    card.style.borderLeftColor=color;
    card.style.animationDelay=`${Math.min(idx*20,300)}ms`;
    card.dataset.code=ex.code;
    const timerText=state==='upcoming'?fmtCountdown(msLeft):'–';
    const statusBadge=state==='inprogress'
        ?`<span class="status-badge inprogress">● IN PROGRESS</span>`
        :state==='over'?`<span class="status-badge over">EXAM OVER</span>`:'';
    card.innerHTML=`
        <div class="exam-top">
            <div class="exam-title-block">
                <span class="exam-subject">${ex.subject}</span>
                <span class="exam-component">${ex.component}</span>
            </div>
            ${statusBadge}
        </div>
        <div class="exam-meta">
            <span class="badge"><i class="fas fa-calendar"></i> ${ex.date}/26</span>
            <span class="badge"><i class="fas fa-scroll"></i> ${ex.board} ${ex.level}</span>
            <span class="badge"><i class="fas fa-code"></i> ${ex.code}</span>
            <span class="badge"><i class="fas fa-clock"></i> ${fmtTime(ex.start)} – ${fmtTime(ex.end)}</span>
            <span class="badge"><i class="fas fa-hourglass"></i> ${fmtDuration(ex.durationMin)}</span>
        </div>
        <div class="countdown-block">
            <span class="countdown-timer${state!=='upcoming'?' dim':''}" data-code="${ex.code}">${timerText}</span>
            <div class="progress-wrap"><div class="progress-bar" data-bar="${ex.code}" style="width:${(frac*100).toFixed(3)}%;background:${color}"></div></div>
        </div>
        <div class="card-hover-tooltip">
            <div class="cal-tooltip-top">
                <div class="cal-tooltip-title-block">
                    <span class="exam-subject">${ex.subject}${ex.isSpeaking?' <i class="fas fa-microphone"></i>':''}</span>
                    <span class="exam-component">${ex.component}</span>
                </div>
                ${statusBadge}
            </div>
            <div class="exam-meta">
                <span class="badge"><i class="fas fa-calendar"></i> ${ex.date}/26</span>
                <span class="badge"><i class="fas fa-scroll"></i> ${ex.board} ${ex.level}</span>
                <span class="badge"><i class="fas fa-code"></i> ${ex.code}</span>
                <span class="badge"><i class="fas fa-clock"></i> ${fmtTime(ex.start)} – ${fmtTime(ex.end)}</span>
                <span class="badge"><i class="fas fa-hourglass"></i> ${fmtDuration(ex.durationMin)}</span>
            </div>
                <div class="countdown-block">
                <span class="countdown-timer${state!=='upcoming'?' dim':''}" data-code="${ex.code}-hover">${timerText}</span>
                <div class="progress-wrap"><div class="progress-bar" data-bar="${ex.code}-hover" style="width:${(frac*100).toFixed(3)}%;background:${color}"></div></div>
                </div>
                </div>`;
    return card;
}

// ── Progress tracker render ────────────────────────────────────────────────────
function renderProgressTracker() {
    const now = Date.now();
    const allExams = currentFiltered.length > 0 ? currentFiltered : exams;

    // ── Build per-subject stats ──────────────────────────────────────────────
    const subjectStats = {};
    allExams.forEach(e => {
        if (!subjectStats[e.subject]) {
            subjectStats[e.subject] = { total: 0, completed: 0 };
        }
        subjectStats[e.subject].total++;
        if (getState(e.start, e.end, now) === 'over') {
            subjectStats[e.subject].completed++;
        }
    });

    const subjects = Object.keys(subjectStats);
    const numSubjects = subjects.length;

    // ── Overall progress: each subject weighted equally (1/N) ────────────────
    // Within each subject: coursework fraction is always complete; written fraction
    // fills in as papers are sat.
    let overallFrac = 0;
    subjects.forEach(subject => {
        const stats = subjectStats[subject];
        const cwPct = COURSEWORK[subject] || 0;
        const writtenPct = 100 - cwPct;
        const writtenDoneFrac = stats.total > 0 ? (stats.completed / stats.total) : 0;
        // subject's contribution = (cw always done + written proportion done) / 100, weighted 1/N
        const subjectFrac = (cwPct + writtenDoneFrac * writtenPct) / 100;
        overallFrac += subjectFrac / numSubjects;
    });
    const percent = numSubjects > 0 ? Math.round(overallFrac * 100 * 10) / 10 : 0;

    // Exam paper counts for the stat box (still useful raw numbers)
    const completedPapers = allExams.filter(e => getState(e.start, e.end, now) === 'over').length;
    const totalPapers = allExams.length;

    // Days remaining
    const lastExam = allExams[allExams.length - 1];
    const daysRemaining = lastExam ? Math.max(0, Math.ceil((lastExam.end - now) / (1000 * 60 * 60 * 24))) : 0;

    // ── Update main stats ────────────────────────────────────────────────────
    document.getElementById('progressCirclePercent').textContent = percent + '%';

    // Update circular progress (stroke-dashoffset)
    const circle = document.querySelector('.progress-fill');
    if (circle) {
        const circumference = 595.9;
        circle.style.strokeDashoffset = circumference * (1 - percent / 100);
    }

    // ── Subjects list ────────────────────────────────────────────────────────
    const subjectsList = document.getElementById('progressSubjectsList');
    if (!subjectsList) return;

    subjectsList.innerHTML = '';
    Object.entries(subjectStats).sort((a, b) => a[0].localeCompare(b[0])).forEach(([subject, stats]) => {
        const cwPct = COURSEWORK[subject] || 0;
        const writtenPct = 100 - cwPct;
        const writtenFillPct = stats.total > 0 ? (stats.completed / stats.total) * writtenPct : 0;
        const countText = writtenFillPct + cwPct + '%';

        let html = '<div class="subject-progress-item">' +
            '<div class="subject-progress-label">' + subject + '</div>' +
            '<div class="subject-progress-bar-track">';

        if (cwPct > 0) {
            html += '<div class="subject-progress-fill cw-fill" style="width:' + cwPct.toFixed(1) + '%"></div>';
        }
        html += '<div class="subject-progress-fill exam-fill" style="width:' + writtenFillPct.toFixed(1) + '%"></div>';

        html += '</div>' +
            '<div class="subject-progress-count">' + countText + '</div>' +
            '</div>';

        subjectsList.innerHTML += html;
    });

    if (calModeOnly) {
        calModeOnly.forEach((el) => {el.style.display = calMode ? 'flex' : 'none'});
    }
}

// ── Sidebar timer updates ─────────────────────────────────────────────────────
function updateSidebarTimers() {
    // Also update sidebar placeholders when present
    const sidebarQuickContent = document.getElementById('sidebarQuickLinksContent');
    const sidebarCountdownsContent = document.getElementById('sidebarCountdownsContent');
    if (sidebarQuickContent) {
        sidebarQuickContent.innerHTML = document.querySelector('.quick-links-menu')?.innerHTML || '';
    }
    if (sidebarCountdownsContent) {
        // Build simple countdown blocks similar to main view
        const rem = document.getElementById('remtime');
        const half = document.getElementById('halfTermTime');
        const end = document.getElementById('endremtime');
        sidebarCountdownsContent.innerHTML = `
            <div class="sidebar-quick-count"><strong>Next:</strong> <span>${rem?.textContent || '–'}</span><div class="sidebar-sublabel">${document.getElementById('remtimeLabel')?.textContent || ''}</div></div>
            <div class="sidebar-quick-count"><strong>Half term:</strong> <span>${half?.textContent || '–'}</span><div class="sidebar-sublabel">${document.getElementById('halfTermLabel')?.textContent || ''}</div></div>
            <div class="sidebar-quick-count"><strong>End of exams:</strong> <span>${end?.textContent || '–'}</span><div class="sidebar-sublabel">${document.getElementById('endremtimeLabel')?.textContent || ''}</div></div>
        `;
    }

    const now = Date.now();

    // "Time until next exam" — the next upcoming exam
    const nextUpcoming = currentFiltered.find(e => getState(e.start, e.end, now) === 'upcoming');
    const remtimeEl = document.getElementById('remtime');
    const sidebarRemtimeEl = document.getElementById('sidebar-remtime');
    const remtimeLabelEl = document.getElementById('remtimeLabel');
    const sidebarRemtimeLabelEl = document.getElementById('sidebar-remtimeLabel');
    if (nextUpcoming) {
        const countdownText = fmtCountdown(nextUpcoming.start - now);
        const labelText = `${nextUpcoming.subject} · ${nextUpcoming.component}`;
        if (remtimeEl) { remtimeEl.textContent = countdownText; }
        if (sidebarRemtimeEl) { sidebarRemtimeEl.textContent = countdownText; }
        if (remtimeLabelEl) { remtimeLabelEl.textContent = labelText; }
        if (sidebarRemtimeLabelEl) { sidebarRemtimeLabelEl.textContent = labelText; }
        if (remtimeEl) { remtimeEl.dataset.code = nextUpcoming.code; }
        if (sidebarRemtimeEl) { sidebarRemtimeEl.dataset.code = nextUpcoming.code; }
    } else {
        if (remtimeEl) { remtimeEl.textContent = '–'; remtimeEl.dataset.code = ''; }
        if (sidebarRemtimeEl) { sidebarRemtimeEl.textContent = '–'; sidebarRemtimeEl.dataset.code = ''; }
        if (remtimeLabelEl) { remtimeLabelEl.textContent = ''; }
        if (sidebarRemtimeLabelEl) { sidebarRemtimeLabelEl.textContent = ''; }
    }

    // "End of exams" — last exam in filtered list
    const last = currentFiltered.length ? currentFiltered[currentFiltered.length - 1] : null;
    const endremtimeEl = document.getElementById('endremtime');
    const sidebarEndremtimeEl = document.getElementById('sidebar-endremtime');
    if (last) {
        const countdownText = fmtCountdown(last.end - now);
        const labelText = `After: ${last.subject} · ${last.component}`;
        if (endremtimeEl) { endremtimeEl.textContent = countdownText; }
        if (sidebarEndremtimeEl) { sidebarEndremtimeEl.textContent = countdownText; }
        const endremtimeLabelEl = document.getElementById('endremtimeLabel');
        const sidebarEndremtimeLabelEl = document.getElementById('sidebar-endremtimeLabel');
        if (endremtimeLabelEl) { endremtimeLabelEl.textContent = labelText; }
        if (sidebarEndremtimeLabelEl) { sidebarEndremtimeLabelEl.textContent = labelText; }
        if (endremtimeEl) { endremtimeEl.dataset.code = last.code; }
        if (sidebarEndremtimeEl) { sidebarEndremtimeEl.dataset.code = last.code; }
    } else {
        if (endremtimeEl) { endremtimeEl.textContent = '–'; endremtimeEl.dataset.code = ''; }
        if (sidebarEndremtimeEl) { sidebarEndremtimeEl.textContent = '–'; sidebarEndremtimeEl.dataset.code = ''; }
        const endremtimeLabelEl = document.getElementById('endremtimeLabel');
        const sidebarEndremtimeLabelEl = document.getElementById('sidebar-endremtimeLabel');
        if (endremtimeLabelEl) { endremtimeLabelEl.textContent = ''; }
        if (sidebarEndremtimeLabelEl) { sidebarEndremtimeLabelEl.textContent = ''; }
    }

    // "Until half term" — countdown to the end of the last exam BEFORE half term
    const halfTermTimeEl = document.getElementById('halfTermTime');
    const sidebarHalfTermTimeEl = document.getElementById('sidebar-halfTermTime');
    const halfTermLabelEl = document.getElementById('halfTermLabel');
    const sidebarHalfTermLabelEl = document.getElementById('sidebar-halfTermLabel');
    const halfTermBoxEl = halfTermTimeEl?.parentElement;
    const halfTermMs = HALF_TERM_START.getTime();
    const examsBeforeHalfTerm = currentFiltered.filter(e => e.start.getTime() < halfTermMs);
    if (examsBeforeHalfTerm.length > 0) {
        const lastBeforeHT = examsBeforeHalfTerm[examsBeforeHalfTerm.length - 1];
        const msLeft = lastBeforeHT.end - now;
        if (msLeft > 0) {
            if (halfTermBoxEl) halfTermBoxEl.style.display = '';
            const countdownText = fmtCountdown(msLeft);
            const labelText = `After: ${lastBeforeHT.subject} · ${lastBeforeHT.component}`;
            if (halfTermTimeEl) { halfTermTimeEl.textContent = countdownText; }
            if (sidebarHalfTermTimeEl) { sidebarHalfTermTimeEl.textContent = countdownText; }
            if (halfTermLabelEl) { halfTermLabelEl.textContent = labelText; }
            if (sidebarHalfTermLabelEl) { sidebarHalfTermLabelEl.textContent = labelText; }
            if (halfTermTimeEl) { halfTermTimeEl.dataset.code = lastBeforeHT.code; }
            if (sidebarHalfTermTimeEl) { sidebarHalfTermTimeEl.dataset.code = lastBeforeHT.code; }
        } else {
            if (halfTermBoxEl) halfTermBoxEl.style.display = 'none';
            if (halfTermTimeEl) { halfTermTimeEl.textContent = '–'; halfTermTimeEl.dataset.code = ''; }
            if (sidebarHalfTermTimeEl) { sidebarHalfTermTimeEl.textContent = '–'; sidebarHalfTermTimeEl.dataset.code = ''; }
            if (halfTermLabelEl) { halfTermLabelEl.textContent = ''; }
            if (sidebarHalfTermLabelEl) { sidebarHalfTermLabelEl.textContent = ''; }
        }
    } else {
        if (halfTermBoxEl) halfTermBoxEl.style.display = 'none';
        if (halfTermTimeEl) { halfTermTimeEl.textContent = '–'; halfTermTimeEl.dataset.code = ''; }
        if (sidebarHalfTermTimeEl) { sidebarHalfTermTimeEl.textContent = '–'; sidebarHalfTermTimeEl.dataset.code = ''; }
        if (halfTermLabelEl) { halfTermLabelEl.textContent = ''; }
        if (sidebarHalfTermLabelEl) { sidebarHalfTermLabelEl.textContent = ''; }
    }
}

function initRevisionPlanner() {
    if (document.getElementById('examList').style.display === 'none') {
        document.getElementById('examList').style.display = 'block';
    } else {
        document.getElementById('examList').style.display = 'none';
    }
}

let dateFormatted;

function updateDay() {
    dateFormatted = new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'})
    document.getElementById('date').textContent = dateFormatted;
}

updateDay()

function updateClock(){
    let timeFormatted = new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false})
    if (timeFormatted.split(":")[-2] == 0) {
        updateDay();
    }
    document.getElementById('clock').textContent=
        `${dateFormatted} | ${timeFormatted}`;
}

function updateTime(){
    let timeFormatted = new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false})
    document.getElementById('time').textContent=timeFormatted;
}

exams.forEach(e=>{prevStates[e.code]=getState(e.start,e.end,Date.now());});

function tick(){
    const now=Date.now();
    let changed=false;
    exams.forEach(e=>{const s=getState(e.start,e.end,now);if(prevStates[e.code]!==s){prevStates[e.code]=s;changed=true;}});
    if(changed){renderExams();return;}

    updateSidebarTimers();
    
    // if (progressMode) renderProgressTracker();

    document.querySelectorAll('[data-code]').forEach(el=>{
        if(!el.classList.contains('countdown-timer'))return;
        const code = el.dataset.code.replace('-hover','');
        const exam=exams.find(x=>x.code===code);
        if(!exam||getState(exam.start,exam.end,now)!=='upcoming')return;
        const msLeft=exam.start-now;
        el.textContent=fmtCountdown(msLeft);
        const frac=getFrac(msLeft),color=fracToColor(frac);
        // Only update bar for non-hover timers (avoid double-select)
        if (!el.dataset.code.endsWith('-hover')) {
            const bar=document.querySelector(`[data-bar="${exam.code}"]`);
            if(bar){bar.style.width=(frac*100).toFixed(3)+'%';bar.style.background=color;}
            const barHover=document.querySelector(`[data-bar="${exam.code}-hover"]`);
            if(barHover){barHover.style.width=(frac*100).toFixed(3)+'%';barHover.style.background=color;}
            const card=el.closest('.exam-card');
            if(card)card.style.borderLeftColor=color;
        }
    });
}

renderExams();
if (progressMode) renderProgressTracker();
updateClock();
setInterval(updateClock,100);
setInterval(updateTime, 100);
setInterval(tick,100);

// Calendar tooltip flip-direction: check on mouseenter so tooltip doesn't overflow viewport
document.getElementById('examList').addEventListener('mouseenter', e => {
    const pill = e.target.closest('.cal-exam');
    if (!pill) return;
    const tooltip = pill.querySelector('.cal-exam-tooltip');
    if (!tooltip) return;
    pill.classList.remove('flip-up', 'flip-left');
    tooltip.style.display = 'block';
    const tr = tooltip.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    if (tr.bottom > vh - 10) pill.classList.add('flip-up');
    if (tr.right > vw - 10) pill.classList.add('flip-left');
    tooltip.style.display = '';
}, true);

// Compact card hover tooltip flip-direction
document.getElementById('examList').addEventListener('mouseenter', e => {
    const card = e.target.closest('.exam-card');
    if (!card) return;
    const tooltip = card.querySelector('.card-hover-tooltip');
    if (!tooltip) return;
    card.classList.remove('tooltip-flip-up', 'tooltip-flip-left');
    tooltip.style.display = 'block';
    const tr = tooltip.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    if (tr.bottom > vh - 10) card.classList.add('tooltip-flip-up');
    if (tr.right > vw - 10) card.classList.add('tooltip-flip-left');
    tooltip.style.display = '';
}, true);

// Countdown box click handlers — scroll to the relevant exam
function scrollToExam(examCode) {
    if (!examCode) return;
    
    // Find the exam element - could be .exam-card (default), .cal-exam (calendar), or .exam-row (compact)
    const examList = document.getElementById('examList');
    if (!examList) return;
    
    let examEl = null;
    // Search for the exam in any display mode
    examEl = examList.querySelector(`[data-code="${examCode}"]`);
    
    if (examEl) {
        // Scroll into view
        examEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Find the containing card/row/item and add highlight
        const container = examEl.closest('.exam-card') || examEl.closest('.cal-exam') || examEl.closest('.exam-row');
        if (container) {
            container.classList.add('highlight-flash');
            setTimeout(() => container.classList.remove('highlight-flash'), 600);
        }
    }
}

// Add click handlers to countdown boxes - attach to parent container
if (countdownsMenu) {
    const countdownBoxes = countdownsMenu.querySelectorAll('.countdown-box');
    countdownBoxes[0]?.addEventListener('click', () => scrollToExam(document.getElementById('remtime')?.dataset.code));
    countdownBoxes[1]?.addEventListener('click', () => scrollToExam(document.getElementById('halfTermTime')?.dataset.code));
    countdownBoxes[2]?.addEventListener('click', () => scrollToExam(document.getElementById('endremtime')?.dataset.code));
    
    // Add cursor pointer styling
    countdownBoxes.forEach(box => {
        box.style.cursor = 'pointer';
    });
}

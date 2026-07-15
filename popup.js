
const expertiseData = {
  "SQL Server Administration": {
    kicker: "Database Platform",
    body: "Production-focused SQL Server administration with emphasis on daily operations, reporting, security checks, jobs, backup validation, and troubleshooting.",
    details: [
      ["Operational focus", "SQL Agent jobs, recurring reports, Database Mail, access reviews, and production support."],
      ["Strong areas", "T-SQL scripting, backup checks, job health, database status, and operational reporting."],
      ["Related case studies", "SQL Server Operational Reporting, Backup / Restore Automation, SOX Access Review."]
    ],
    tags: ["SQL Server", "T-SQL", "SQL Agent", "Reporting", "SOX"]
  },

  "MariaDB / MySQL Administration": {
    kicker: "Database Platform",
    body: "Hands-on work and study around MySQL and MariaDB environments, with focus on migration planning, replication concepts, database maintenance, and Linux-based operations.",
    details: [
      ["Operational focus", "Database maintenance, migration paths, replication checks, and engine conversion planning."],
      ["Strong areas", "MariaDB/MySQL administration, MyISAM to InnoDB thinking, and version upgrade strategies."],
      ["Related case studies", "MariaDB 5.5 to 10.6 Upgrade Strategy, replication and promotion planning."]
    ],
    tags: ["MariaDB", "MySQL", "Replication", "Migration", "Linux"]
  },

  "PostgreSQL": {
    kicker: "Database Platform",
    body: "Practical PostgreSQL learning and lab work from a database professional perspective, focused on understanding architecture, relationships, replication, and failover behavior.",
    details: [
      ["Operational focus", "Schema design, replication labs, promotion tests, and failover concepts."],
      ["Current status", "Growing practical experience through labs, experiments, and structured study."],
      ["Related case studies", "PostgreSQL Replication Lab and open-source database exercises."]
    ],
    tags: ["PostgreSQL", "Replication", "Lab Work", "SQL", "Open Source"]
  },

  "Oracle Database Administration": {
    kicker: "Database Platform",
    body: "Previous exposure to Oracle database environments, including SQL, PL/SQL, administrative support, backup and recovery concepts, and enterprise database operations.",
    details: [
      ["Operational focus", "Enterprise database support, SQL/PLSQL work, and administrative tasks."],
      ["Experience type", "Earlier professional exposure and support-oriented database work."],
      ["Related case studies", "Enterprise database administration and backup/recovery support."]
    ],
    tags: ["Oracle", "PL/SQL", "Enterprise DB", "Backup", "Administration"]
  },

  "Linux Systems Operations": {
    kicker: "Operational Capability",
    body: "Comfortable working across Linux environments for database support, scripting, file operations, logs, permissions, packages, services, and experimentation with multiple distributions.",
    details: [
      ["Operational focus", "Service checks, logs, shell commands, permissions, files, packages, and database host support."],
      ["Comfort zone", "Able to work across Debian, Ubuntu, and similar Linux environments while continuing to deepen knowledge."],
      ["Related case studies", "MariaDB/Linux operations, PostgreSQL labs, scripting and automation tasks."]
    ],
    tags: ["Linux", "Debian", "Ubuntu", "Shell", "Operations"]
  },

  "High Availability": {
    kicker: "Operational Capability",
    body: "Experience and study around database availability patterns, including replication, failover, standby environments, continuity planning, and recovery behavior.",
    details: [
      ["Operational focus", "Replication, failover concepts, standby systems, and continuity planning."],
      ["Strong areas", "Understanding how database availability depends on architecture, monitoring, backup, and recovery procedures."],
      ["Related case studies", "MariaDB replication planning, PostgreSQL failover lab, SQL Server HA concepts."]
    ],
    tags: ["HA", "Replication", "Failover", "Standby", "Continuity"]
  },

  "Backup & Disaster Recovery": {
    kicker: "Operational Capability",
    body: "Backup and recovery work across database environments, including restore validation, recovery planning, backup history checks, detach/reattach scenarios, and repeatable DBA procedures.",
    details: [
      ["Operational focus", "Full, differential, and log backup awareness, restore validation, backup history, and recovery planning."],
      ["Strong areas", "Repeatable runbooks, validation scripts, detach/reattach tasks, and practical restore workflows."],
      ["Related case studies", "Backup / Restore / Detach-Reattach Automation."]
    ],
    tags: ["Backup", "Restore", "Disaster Recovery", "Validation", "Runbooks"]
  },

  "Database Monitoring": {
    kicker: "Operational Capability",
    body: "Monitoring-oriented database support focused on jobs, errors, long-running queries, capacity signals, replication health, logs, alerts, and early detection of operational issues.",
    details: [
      ["Operational focus", "SQL Agent jobs, logs, alerts, replication health, long-running queries, and database capacity signals."],
      ["Strong areas", "Building practical checks that help detect issues before they become production incidents."],
      ["Related case studies", "Monitoring dashboards, job health checks, backup validation reports."]
    ],
    tags: ["Monitoring", "Alerts", "Jobs", "Logs", "Performance"]
  },

  "DevOps Practices": {
    kicker: "Growth Layer",
    body: "Growing practice with DevOps-style workflows for database environments, including version control, YAML-based automation, deployment thinking, documentation, and repeatable infrastructure tasks.",
    details: [
      ["Operational focus", "GitHub, YAML workflows, repeatable scripts, documentation, and environment setup thinking."],
      ["Current direction", "Applying DevOps concepts to DBA tasks, labs, automation, and reproducible technical environments."],
      ["Related case studies", "GitHub Actions learning, Ansible/YAML environment planning, automation workflows."]
    ],
    tags: ["GitHub", "YAML", "Automation", "CI/CD", "Runbooks"]
  },

  "AI-Assisted Development": {
    kicker: "Growth Layer",
    body: "Uses modern AI coding assistants to accelerate prototyping, scripting, web development, debugging, documentation, and practical tool creation.",
    details: [
      ["Operational focus", "Using AI as a coding partner for scripts, web tools, debugging, documentation, and productivity projects."],
      ["Strong areas", "Turning practical needs into working prototypes faster, especially with JavaScript, Python, SQL, and CSS."],
      ["Related case studies", "Daily Activities Web App, portfolio design, automation scripts, and AI-assisted coding workflows."]
    ],
    tags: ["AI Coding", "Automation", "JavaScript", "Python", "Productivity"]
  },

  "Machine Learning Foundations": {
    kicker: "Growth Layer",
    body: "Building foundations in machine learning through practical study of Python, data preparation, model experimentation, linear algebra, probability, and applied learning projects.",
    details: [
      ["Learning focus", "Linear algebra, probability, datasets, model experiments, and practical ML workflows."],
      ["Current direction", "Connecting database experience with data preparation, analysis, and model-building fundamentals."],
      ["Related case studies", "Kaggle dataset practice, Python notebooks, ML foundations exercises."]
    ],
    tags: ["Python", "Models", "Math", "Datasets", "Experiments"]
  },

  "Data Science Exploration": {
    kicker: "Growth Layer",
    body: "Exploring data science workflows from a database professional perspective: data cleaning, analysis, visualization, feature preparation, and practical experiments using real datasets.",
    details: [
      ["Learning focus", "Data cleaning, exploratory analysis, visualization, feature preparation, and dataset organization."],
      ["Current direction", "Using database knowledge as a foundation for data analysis and applied data science workflows."],
      ["Related case studies", "Kaggle datasets, Pandas/NumPy practice, visualization and analysis experiments."]
    ],
    tags: ["Pandas", "NumPy", "Visualization", "Analysis", "Datasets"]
  }
};

const popup = document.getElementById("expertisePopup");
const popupKicker = document.getElementById("popupKicker");
const popupTitle = document.getElementById("popupTitle");
const popupBody = document.getElementById("popupBody");
const popupDetails = document.getElementById("popupDetails");
const popupTags = document.getElementById("popupTags");
const closeButton = popup.querySelector(".popup-close");

const cards = document.querySelectorAll("#services .expertise-card");

function positionPopup(card) {
  const cardRect = card.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();

  const gap = 18;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let left = cardRect.right + gap;
  let top = cardRect.top + cardRect.height / 2 - popupRect.height / 2;

  const spaceRight = viewportWidth - cardRect.right;
  const spaceLeft = cardRect.left;

  if (spaceRight < popupRect.width + gap && spaceLeft > popupRect.width + gap) {
    left = cardRect.left - popupRect.width - gap;
  }

  if (viewportWidth <= 680) {
    left = 18;
    top = viewportHeight / 2;
  } else {
    if (left + popupRect.width > viewportWidth - gap) {
      left = viewportWidth - popupRect.width - gap;
    }

    if (left < gap) {
      left = gap;
    }

    if (top < gap) {
      top = gap;
    }

    if (top + popupRect.height > viewportHeight - gap) {
      top = viewportHeight - popupRect.height - gap;
    }
  }

  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
}

function openPopup(card) {
  const title = card.querySelector("h3").textContent.trim();
  const data = expertiseData[title];

  if (!data) return;

  cards.forEach(item => item.classList.remove("selected"));
  card.classList.add("selected");

  popupKicker.textContent = data.kicker;
  popupTitle.textContent = title;
  popupBody.textContent = data.body;

  popupDetails.innerHTML = data.details
    .map(([label, text]) => `<div><strong>${label}:</strong> ${text}</div>`)
    .join("");

  popupTags.innerHTML = data.tags
    .map(tag => `<span>${tag}</span>`)
    .join("");

  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => positionPopup(card));
}

function closePopup() {
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");
  cards.forEach(item => item.classList.remove("selected"));
}

cards.forEach(card => {
  card.setAttribute("tabindex", "0");

  card.addEventListener("click", event => {
    event.stopPropagation();
    openPopup(card);
  });

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPopup(card);
    }
  });
});

closeButton.addEventListener("click", event => {
  event.stopPropagation();
  closePopup();
});

popup.addEventListener("click", event => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  closePopup();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePopup();
  }
});

window.addEventListener("resize", () => {
  const selectedCard = document.querySelector("#services .expertise-card.selected");
  if (selectedCard && popup.classList.contains("active")) {
    positionPopup(selectedCard);
  }
});

window.addEventListener("scroll", () => {
  const selectedCard = document.querySelector("#services .expertise-card.selected");
  if (selectedCard && popup.classList.contains("active")) {
    positionPopup(selectedCard);
  }
}, { passive: true });

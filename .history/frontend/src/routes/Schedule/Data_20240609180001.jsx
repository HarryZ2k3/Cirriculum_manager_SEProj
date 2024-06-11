export const sampleClasses = [
    {
      day: 'Monday',
      startPeriod: 1,
      endPeriod: 2,
      name: 'Theoretical Models in Computing',
      teacher: 'Nguyen Duc Dung',
      classroom: 'A1.109',
      startTime: '08:00',
      endTime: '09:30',
      semester: 'Semester 1',
    },
    {
      day: 'Tuesday',
      startPeriod: 2,
      endPeriod: 4,
      name: 'Principles of Database Management',
      teacher: 'Ly Tu Nga',
      classroom: 'LA1.301',
      startTime: '09:45',
      endTime: '12:00',
      semester: 'Semester 1',
    },
    {
      day: 'Wednesday',
      startPeriod: 3,
      endPeriod: 4,
      name: 'Object-Oriented Analysis and Design',
      teacher: 'Tran Manh Ha',
      classroom: 'A1.208',
      startTime: '10:00',
      endTime: '11:30',
      semester: 'Semester 2',
    },
    {
      day: 'Thursday',
      startPeriod: 4,
      endPeriod: 5,
      name: 'Physical Training 2',
      teacher: 'N.P.Hung',
      classroom: 'ONLINE1',
      startTime: '13:00',
      endTime: '14:30',
      semester: 'Semester 2',
    },
    // Add more classes here
  ];
  
  export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  export const periods = Array.from({ length: 10 }, (_, i) => i + 1); // Assuming 10 periods for simplification
  export const semesters = ['Semester 1', 'Semester 2'];
  
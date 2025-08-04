import React from 'react';

const courses = [
{ id: 1, name: 'Angular', date: '4/5/2021', isActive: true },
{ id: 2, name: 'React', date: '6/3/2020', isActive: false },
{ id: 3, name: 'Vue.js', date: '1/1/2022', isActive: true },
];

function CourseItem({ course }) {
return (
    <div>
        <div className="item-title">{course.name}</div>
        <div className="item-date">{course.date}</div>
    </div>
);
}

function CourseDetails({ showActiveOnly }) {
    const filteredCourses = showActiveOnly
    ? courses.filter(course => course.isActive)
    : courses;

return (
    <div className="component-section">
        <h2>Course Details</h2>
        {filteredCourses.length > 0 && (
        <div>
            {filteredCourses.map(course => (
            <CourseItem key={course.id} course={course} />
            ))}
        </div>
    )}
    {filteredCourses.length === 0 ? (
        <p>No courses to display based on current filter.</p>
    ) : null}
    </div>
);
}

export default CourseDetails;
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus Life' },
    { id: 'events', name: 'School Events' },
    { id: 'academics', name: 'Academic Activities' },
    { id: 'sports', name: 'Sports & Athletics' },
    { id: 'cultural', name: 'Cultural Programs' },
  ];

  const photos = [
    // Only user-provided Campus Life images below:
    { id: 10001, src: '/CAMPUS LIFE/CAMPUS LIFE1.JPG', category: 'campus', title: 'Geography Group Study', description: 'Students collaborating on a globe activity.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10002, src: '/CAMPUS LIFE/CAMPUS LIFE2.jpg', category: 'campus', title: 'Light Experiment', description: 'Student exploring light and shadow.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10003, src: '/CAMPUS LIFE/CAMPUS LIFE3.jpg', category: 'campus', title: 'SCOUTS AND GUIDES', description: 'Students forming a joyful circle outdoors.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10004, src: '/CAMPUS LIFE/CAMPUS LIFE4.jpg', category: 'campus', title: 'Creative Playtime', description: 'Young children building with blocks.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10005, src: '/CAMPUS LIFE/CAMPUS LIFE5.jpg', category: 'campus', title: 'Science in Action', description: 'Students conducting a science experiment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10006, src: '/CAMPUS LIFE/CAMPUS LIFE6.JPG', category: 'campus', title: 'Cultural Performance', description: 'Students performing on stage in traditional attire.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10007, src: '/CAMPUS LIFE/CAMPUS LIFE7.JPG', category: 'campus', title: 'Inspiring Speech', description: 'Speaker addressing the school assembly.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10008, src: '/CAMPUS LIFE/CAMPUS LIFE8.JPG', category: 'campus', title: 'Seminar Session', description: 'Students attending a seminar in the auditorium.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10009, src: '/CAMPUS LIFE/CAMPUS LIFE9.JPG', category: 'campus', title: 'Leadership Wall', description: 'Student posing by a leadership-themed wall.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10010, src: '/CAMPUS LIFE/CAMPUS LIFE10.JPG', category: 'campus', title: 'Best Friends', description: 'Two young students smiling and posing together.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10011, src: '/CAMPUS LIFE/CAMPUS LIFE11.JPG', category: 'campus', title: 'Gardening Project', description: 'Student tending to plants in the school garden.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10012, src: '/CAMPUS LIFE/CAMPUS LIFE12.jpg', category: 'campus', title: 'Hand Painting Fun', description: 'Students showing off colorful painted hands.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10013, src: '/CAMPUS LIFE/CAMPUS LIFE13.png', category: 'campus', title: 'Focused Audience', description: 'Students attentively listening during an event.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10014, src: '/CAMPUS LIFE/CAMPUS LIFE14.png', category: 'campus', title: 'School Event Gathering', description: 'Large group of students at a school event.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10015, src: '/CAMPUS LIFE/CAMPUS LIFE15.JPG', category: 'campus', title: 'Math Lab Activity', description: 'Students working on a math project.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10016, src: '/CAMPUS LIFE/CAMPUS LIFE16.JPG', category: 'campus', title: 'Playful Companions', description: 'Two students sharing a happy moment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10017, src: '/CAMPUS LIFE/CAMPUS LIFE17.JPG', category: 'campus', title: 'Microscope Discovery', description: 'Student using a microscope in science class.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10018, src: '/CAMPUS LIFE/CAMPUS LIFE18.JPG', category: 'campus', title: 'Teacher Guidance', description: 'Teacher assisting a student with a microscope.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10019, src: '/CAMPUS LIFE/CAMPUS LIFE19.JPG', category: 'campus', title: 'Reading Together', description: 'Students enjoying reading in class.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10020, src: '/CAMPUS LIFE/CAMPUS LIFE20.JPG', category: 'campus', title: 'Classroom Cheers', description: 'Students raising hands and celebrating in class.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10021, src: '/CAMPUS LIFE/CAMPUS LIFE21.JPG', category: 'campus', title: 'Confident Smile', description: 'Student smiling confidently in the corridor.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10022, src: '/CAMPUS LIFE/CAMPUS LIFE22.JPG', category: 'campus', title: 'Chemistry Experiment', description: 'Student performing a chemistry experiment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10023, src: '/CAMPUS LIFE/CAMPUS LIFE23.JPG', category: 'campus', title: 'Lab Demonstration', description: 'Teacher demonstrating a science experiment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10024, src: '/CAMPUS LIFE/CAMPUS LIFE24.JPG', category: 'campus', title: 'Science Project', description: 'Students working on a science project.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10025, src: '/CAMPUS LIFE/CAMPUS LIFE25.JPG', category: 'campus', title: 'Group Project', description: 'Students collaborating on a group project.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10026, src: '/CAMPUS LIFE/CAMPUS LIFE26.JPG', category: 'campus', title: 'Thumbs Up!', description: 'Student giving a thumbs up in the hallway.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10027, src: '/CAMPUS LIFE/CAMPUS LIFE27.jpg', category: 'campus', title: 'Field Trip Group', description: 'Students and teachers on a field trip.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10028, src: '/CAMPUS LIFE/CAMPUS LIFE27.jpeg', category: 'campus', title: 'Interactive session with Dr APJ Abdul Kalam', description: 'Award presentation with school leaders.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10029, src: '/CAMPUS LIFE/CAMPUS LIFE28.jpeg', category: 'campus', title: 'Interactive session with Dr APJ Abdul Kalam', description: 'Award presentation with school leaders.', date: '2024-01-01', photographer: 'Campus Life' },
    // Add Young Forum images to Academic Activities
    { id: 80001, src: '/ACADEMIC ACTIVITES/YF/IMG_1553.JPG', category: 'academics', title: 'Student Playing Keyboard on Stage', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80002, src: '/ACADEMIC ACTIVITES/YF/IMG_4354.JPG', category: 'academics', title: 'Academic Trophy Display', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80003, src: '/ACADEMIC ACTIVITES/YF/IMG_4322.JPG', category: 'academics', title: 'Student Delegates with Medals', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80004, src: '/ACADEMIC ACTIVITES/YF/IMG_4311.JPG', category: 'academics', title: 'Students Listening During Session', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80005, src: '/ACADEMIC ACTIVITES/YF/IMG_4308.JPG', category: 'academics', title: 'School Delegation Attending Forum', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80006, src: '/ACADEMIC ACTIVITES/YF/IMG_4307.JPG', category: 'academics', title: "Girls' Delegation at the Forum", description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80007, src: '/ACADEMIC ACTIVITES/YF/IMG_1729.JPG', category: 'academics', title: 'Chief Guest Seated in Audience', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80008, src: '/ACADEMIC ACTIVITES/YF/IMG_1792.JPG', category: 'academics', title: 'Stage Panel – Dignitaries Addressing', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80009, src: '/ACADEMIC ACTIVITES/YF/IMG_1427.JPG', category: 'academics', title: 'Keynote Speakers Smiling for Camera', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80010, src: '/ACADEMIC ACTIVITES/YF/IMG_1468.JPG', category: 'academics', title: 'Speaker at Podium – SEEK Foundation Banner', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80011, src: '/ACADEMIC ACTIVITES/YF/IMG_1679.JPG', category: 'academics', title: 'Stage Marshal and Guest', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80012, src: '/ACADEMIC ACTIVITES/YF/IMG_1735.JPG', category: 'academics', title: 'Parent or Guest Judge Observing', description: '', date: '2024-01-01', photographer: 'Young Forum' },
    { id: 80013, src: '/ACADEMIC ACTIVITES/YF/IMG_0118.JPG', category: 'academics', title: 'Full Hall View of Forum Session', description: '', date: '2024-01-01', photographer: 'Young Forum' },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // Intramurals images for Sports & Athletics
  const intramuralsImages = [
    { id: 91001, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_1305.JPG', category: 'sports', title: 'Intense Kabaddi Face-off', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91002, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_1302.JPG', category: 'sports', title: 'Players in Action – Kabaddi Match', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91003, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_1255.JPG', category: 'sports', title: 'Kabaddi Dive and Defense', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91004, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_1212.JPG', category: 'sports', title: 'Mid-Game Move – Kabaddi', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91005, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_1204.JPG', category: 'sports', title: 'Teams Assembling for Match', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91006, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9700.JPG', category: 'sports', title: 'Audience Cheering the Players', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91007, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9644.JPG', category: 'sports', title: 'Basketball Throw Under Pressure', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91008, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9571.JPG', category: 'sports', title: 'Orange Ball Warm-up Round', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91009, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9556.JPG', category: 'sports', title: 'Sports Teacher Guiding with Ball', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91010, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9514.JPG', category: 'sports', title: 'Tug of War – Students in Motion', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91011, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9511.JPG', category: 'sports', title: 'Student in Action – Sprint Start', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91012, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9422.JPG', category: 'sports', title: 'Basketball Match Mid-Throw', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91013, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9397.JPG', category: 'sports', title: 'Teachers Interacting with Students', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91014, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9349.JPG', category: 'sports', title: 'Jump Shot Under the Hoop', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91015, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_0101.JPG', category: 'sports', title: 'Student Warming Up for Athletics', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91016, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_0084.JPG', category: 'sports', title: 'Young Team Competing – Basketball', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91017, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_0012.JPG', category: 'sports', title: 'Fast-Paced Play – Court Action', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91018, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_0013.JPG', category: 'sports', title: 'Mid-Dribble Basketball Moment', description: '', date: '2024-01-01', photographer: 'Sports' },
    { id: 91019, src: '/SPORTS & ALTELITCS/INTRAMURALS/IMG_9998.JPG', category: 'sports', title: 'Player Celebrates Victory', description: '', date: '2024-01-01', photographer: 'Sports' },
  ];

  // Cultural event images for Cultural Programs
  const culturalEvents = [
    { id: 90001, src: '/CULTURAL EVENTS/RGL/IMG_2097.JPG', category: 'cultural', title: 'Chief Guest and Correspondent', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90002, src: '/CULTURAL EVENTS/RGL/IMG_2124.JPG', category: 'cultural', title: 'Student Audience in Hall', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90003, src: '/CULTURAL EVENTS/RGL/IMG_2067.JPG', category: 'cultural', title: 'Enthusiastic Students Attending the Event', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90004, src: '/CULTURAL EVENTS/RGL/IMG_4916.JPG', category: 'cultural', title: 'Girls Cheering with Peace Signs', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90005, src: '/CULTURAL EVENTS/RGL/IMG_4824.JPG', category: 'cultural', title: 'Student Performing with Mic on Stage', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90006, src: '/CULTURAL EVENTS/RGL/IMG_4757.JPG', category: 'cultural', title: 'Judges Watching Cultural Performance', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90007, src: '/CULTURAL EVENTS/RGL/IMG_4744.JPG', category: 'cultural', title: 'Traditional Music Performance by Students', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90008, src: '/CULTURAL EVENTS/RGL/IMG_4525.JPG', category: 'cultural', title: 'Girls in Traditional Dance Costumes', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90009, src: '/CULTURAL EVENTS/RGL/IMG_4504.JPG', category: 'cultural', title: 'Students in Black "Believe You Can 2023–24" T-Shirts', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90010, src: '/CULTURAL EVENTS/RGL/IMG_1832.JPG', category: 'cultural', title: 'Crowd Gathered at the Entrance Area', description: '', date: '2024-01-01', photographer: 'Cultural' },
    { id: 90011, src: '/CULTURAL EVENTS/RGL/IMG_4491.JPG', category: 'cultural', title: 'Student in Uniform in School Corridor', description: '', date: '2024-01-01', photographer: 'Cultural' },
  ];

  // State for intramurals modal
  const [intramuralsModal, setIntramuralsModal] = useState<{ open: boolean, index: number }>({ open: false, index: 0 });

  // --- MODAL STATE ---
  const [modal, setModal] = useState<{ open: boolean, images: any[], index: number }>({ open: false, images: [], index: 0 });

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    // If viewing a cultural event image, navigate within that array
    if (selectedCategory === 'cultural' && culturalEvents.some(img => img.id === lightboxImage)) {
      const currentIndex = culturalEvents.findIndex(img => img.id === lightboxImage);
      let newIndex;
      if (direction === 'prev') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : culturalEvents.length - 1;
      } else {
        newIndex = currentIndex < culturalEvents.length - 1 ? currentIndex + 1 : 0;
      }
      setLightboxImage(culturalEvents[newIndex].id);
      return;
    }
    // Default: use filteredPhotos
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === lightboxImage);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    setLightboxImage(filteredPhotos[newIndex].id);
  };

  const currentPhoto = lightboxImage
    ? photos.find(photo => photo.id === lightboxImage) || [
        { id: 90001, src: '/CULTURAL EVENTS/RGL/IMG_2097.JPG', title: 'Chief Guest and Correspondent', description: '' },
        { id: 90002, src: '/CULTURAL EVENTS/RGL/IMG_2124.JPG', title: 'Student Audience in Hall', description: '' },
        { id: 90003, src: '/CULTURAL EVENTS/RGL/IMG_2067.JPG', title: 'Enthusiastic Students Attending the Event', description: '' },
        { id: 90004, src: '/CULTURAL EVENTS/RGL/IMG_4916.JPG', title: 'Girls Cheering with Peace Signs', description: '' },
        { id: 90005, src: '/CULTURAL EVENTS/RGL/IMG_4824.JPG', title: 'Student Performing with Mic on Stage', description: '' },
        { id: 90006, src: '/CULTURAL EVENTS/RGL/IMG_4757.JPG', title: 'Judges Watching Cultural Performance', description: '' },
        { id: 90007, src: '/CULTURAL EVENTS/RGL/IMG_4744.JPG', title: 'Traditional Music Performance by Students', description: '' },
        { id: 90008, src: '/CULTURAL EVENTS/RGL/IMG_4525.JPG', title: 'Girls in Traditional Dance Costumes', description: '' },
        { id: 90009, src: '/CULTURAL EVENTS/RGL/IMG_4504.JPG', title: 'Students in Black "Believe You Can 2023–24" T-Shirts', description: '' },
        { id: 90010, src: '/CULTURAL EVENTS/RGL/IMG_1832.JPG', title: 'Crowd Gathered at the Entrance Area', description: '' },
        { id: 90011, src: '/CULTURAL EVENTS/RGL/IMG_4491.JPG', title: 'Student in Uniform in School Corridor', description: '' },
      ].find(img => img.id === lightboxImage)
    : null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Add ESC key to close modal
  useEffect(() => {
    if (!intramuralsModal.open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIntramuralsModal({ open: false, index: 0 });
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [intramuralsModal.open]);

  // Calculate total number of photos including main, intramurals, and cultural events
  const totalPhotos = photos.length + intramuralsImages.length + culturalEvents.length;

  // Determine which photos to display based on selected category
  let displayedPhotos = photos;
  if (selectedCategory === 'cultural') {
    displayedPhotos = culturalEvents;
  } else if (selectedCategory === 'sports') {
    displayedPhotos = intramuralsImages;
  } else if (selectedCategory !== 'all') {
    displayedPhotos = photos.filter(photo => photo.category === selectedCategory);
  }

  // --- OPEN MODAL ---
  const openModal = (images: any[], index: number) => {
    setModal({ open: true, images, index });
  };

  // --- CLOSE MODAL ---
  const closeModal = () => {
    console.log('Modal closed');
    setModal({ open: false, images: [], index: 0 });
  };

  // --- NAVIGATE MODAL ---
  const navigateModal = (direction: 'prev' | 'next') => {
    setModal(m => {
      const len = m.images.length;
      const newIndex = direction === 'prev' ? (m.index - 1 + len) % len : (m.index + 1) % len;
      return { ...m, index: newIndex };
    });
  };

  // --- ESC KEY CLOSE ---
  useEffect(() => {
    if (!modal.open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modal.open]);

  // Add ZEST images array
  const zestImages = [
    { id: 92001, src: '/SCHOOL EVENTS/ZEST/DSCN0564.JPG', title: 'Superhero Role Play – Group Picture' },
    { id: 92002, src: '/SCHOOL EVENTS/ZEST/DSCN0625.JPG', title: 'Stuffed Bread Bowl with Veggies – Culinary Display' },
    { id: 92003, src: '/SCHOOL EVENTS/ZEST/DSCN0627.JPG', title: 'Plated Veg Rolls – Student Culinary Art' },
    { id: 92004, src: '/SCHOOL EVENTS/ZEST/DSCN0629.JPG', title: 'Toast Plating by Participants' },
    { id: 92005, src: '/SCHOOL EVENTS/ZEST/FSCN0547.JPG', title: 'Student Wall Art – Fire & Cat' },
    { id: 92006, src: '/SCHOOL EVENTS/ZEST/FSCN0580.JPG', title: 'ZEST Activity Room – Drawing & Crafts' },
    { id: 92007, src: '/SCHOOL EVENTS/ZEST/FSCN0581.JPG', title: 'Children Attending ZEST Event' },
    { id: 92008, src: '/SCHOOL EVENTS/ZEST/IMG_7367.JPG', title: 'Superheroes Assembled – Costume Fun' },
    { id: 92009, src: '/SCHOOL EVENTS/ZEST/IMG_7384.JPG', title: 'Speech Performance – Junior Participant' },
    { id: 92010, src: '/SCHOOL EVENTS/ZEST/IMG_7386.JPG', title: 'Public Speaking – ZEST Stage' },
    { id: 92011, src: '/SCHOOL EVENTS/ZEST/IMG_7443.JPG', title: 'Culinary Competition – Hands-on Experience' },
    { id: 92012, src: '/SCHOOL EVENTS/ZEST/IMG_7464.JPG', title: 'Proud Moment – Dessert Display Winner' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-white/90 mb-8">Capturing the vibrant moments and memories of life at St. Britto's Academy.</p>
        </div>
      </motion.section>

      {/* Gallery Stats */}
      <motion.section
        className="py-12 bg-white border-b"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Camera className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{totalPhotos}+</div>
                <div className="text-gray-600">Photos</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2024</div>
                <div className="text-gray-600">Academic Year</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Students Featured</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full shadow font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#03045e] ${
                  selectedCategory === category.id
                    ? 'bg-[#03045e] text-white'
                    : 'bg-white text-[#03045e] hover:bg-[#03045e] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Photo Grid */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Photos' : categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {displayedPhotos.length} photo{displayedPhotos.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                className="bg-white rounded-lg shadow-md hover:scale-105 transition duration-300 flex flex-col cursor-pointer"
                onClick={() => openModal(displayedPhotos, idx)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="text-sm text-center font-semibold text-[#03045e] mt-2 px-2 pb-3">{photo.title}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Intramurals – Sports Fest Highlights */}
      {selectedCategory === 'sports' && (
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#03045e] text-center mb-6">Intramurals – Sports Fest Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {intramuralsImages.map((img, idx) => (
              <div
                key={img.id}
                className="bg-white rounded-lg shadow-md hover:scale-105 transition duration-300 flex flex-col cursor-pointer"
                onClick={() => openModal(intramuralsImages, idx)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-56 object-cover rounded-t-lg"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="text-sm text-center font-semibold text-[#03045e] mt-2 px-2 pb-3">{img.title}</div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* ZEST – Talent, Art & Culinary Carnival */}
      {selectedCategory === 'events' && (
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#03045e] text-center mb-6">ZEST – Talent, Art & Culinary Carnival</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {zestImages.map((img, idx) => (
              <div
                key={img.id}
                className="bg-white rounded-lg shadow-md hover:scale-105 transition duration-300 flex flex-col cursor-pointer"
                onClick={() => openModal(zestImages, idx)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-t-lg"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="text-sm text-center font-semibold text-[#03045e] mt-2 px-2 pb-3">{img.title}</div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Academic Activities: Young Forum 2024 Section */}
      {selectedCategory === 'academics' && (
        <motion.section
          className="mb-12 animate-fade-in-up"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[#03045e] text-center mb-6">YOUNG FORUM 2024 – Inter-school Intellectual Symposium</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.filter(p => p.category === 'academics').map((img, idx) => (
              <div
                key={img.id}
                className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col cursor-pointer"
                onClick={() => openModal(photos.filter(p => p.category === 'academics'), idx)}
                style={{ background: '#f8fafc' }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-t-lg"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="text-sm text-center font-semibold text-[#03045e] mt-2 px-2 pb-3">{img.title}</div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Modal/Lightbox */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto flex flex-col items-center p-0" onClick={e => { e.stopPropagation(); }}>
            <button
              className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-white text-[#03045e] rounded-full shadow-lg text-2xl font-bold focus:outline-none transition hover:bg-[#03045e] hover:text-white"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={modal.images[modal.index].src}
              alt={modal.images[modal.index].title}
              className="w-full max-h-[70vh] object-contain rounded-t-lg shadow-md"
              style={{ background: '#f8fafc' }}
            />
            <div className="w-full bg-white rounded-b-lg p-6 flex flex-col items-center">
              <div className="text-xl font-bold text-[#03045e] text-center mt-2 mb-1">{modal.images[modal.index].title}</div>
            </div>
            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                className="w-12 h-12 flex items-center justify-center bg-white text-[#03045e] rounded-full shadow-lg text-2xl focus:outline-none transition hover:bg-[#03045e] hover:text-white"
                onClick={e => { e.stopPropagation(); navigateModal('prev'); }}
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                className="w-12 h-12 flex items-center justify-center bg-white text-[#03045e] rounded-full shadow-lg text-2xl focus:outline-none transition hover:bg-[#03045e] hover:text-white"
                onClick={e => { e.stopPropagation(); navigateModal('next'); }}
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            {/* Overlay click closes modal */}
            <div className="fixed inset-0 z-40" onClick={closeModal} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-purple-700 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Share Your Moments</h2>
          <p className="text-xl mb-8">
            Have photos from school events or activities? We'd love to feature them in our gallery. 
            Contact us to share your memories with the St. Britto's community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:photos@stbrittosacademy.edu"
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Submit Photos
            </a>
            <a
              href="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View All Galleries
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Photos;
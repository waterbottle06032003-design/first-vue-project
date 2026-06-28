<script setup lang="ts">
interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Founder & CEO',
    description: 'Visionary leader with 15+ years of experience in technology and innovation.',
    image: '👨‍💼'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    description: 'Expert in modern web technologies and software architecture.',
    image: '👩‍💻'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Head of Design',
    description: 'Creative designer focused on user experience and interface excellence.',
    image: '🎨'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    description: 'Strategic marketer dedicated to building meaningful customer relationships.',
    image: '📊'
  }
]

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new ideas to stay ahead.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Success comes through teamwork and open communication with our partners.'
  },
  {
    icon: '✨',
    title: 'Quality',
    description: 'We maintain the highest standards in everything we deliver.'
  },
  {
    icon: '🌱',
    title: 'Growth',
    description: 'We invest in our people and support continuous personal development.'
  }
]
</script>

<template>
  <div class="about-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>About Us</h1>
        <p class="hero-subtitle">Building the future with passion and innovation</p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="story-section">
      <div class="container">
        <h2>Our Story</h2>
        <div class="story-content">
          <div class="story-text">
            <p>
              Founded in 2015, our company started with a simple vision: to revolutionize the way
              businesses approach technology and digital transformation. What began as a small team
              of passionate developers has grown into a thriving organization serving hundreds of
              clients worldwide.
            </p>
            <p>
              Today, we remain committed to our core mission of delivering innovative solutions
              that empower businesses to achieve their goals. Our journey has been marked by
              continuous learning, adaptation, and a unwavering focus on customer success.
            </p>
          </div>
          <div class="story-stats">
            <div class="stat">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div class="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
            <div class="stat">
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-card">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2>Meet Our Team</h2>
        <p class="team-intro">
          Meet the talented individuals who make everything possible
        </p>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="team-image">{{ member.image }}</div>
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p class="description">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to Work With Us?</h2>
        <p>Let's collaborate and create something amazing together</p>
        <a href="#" class="cta-button">Get Started</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 60px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 24px;
  opacity: 0.9;
}

/* Story Section */
.story-section {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.story-section h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.story-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
}

.story-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.stat {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat h3 {
  font-size: 32px;
  color: #667eea;
  margin-bottom: 10px;
}

.stat p {
  color: #666;
  font-size: 14px;
}

/* Values Section */
.values-section {
  padding: 60px 0;
}

.values-section h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.value-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
}

.value-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* Team Section */
.team-section {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.team-section h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.team-intro {
  text-align: center;
  color: #666;
  font-size: 16px;
  margin-bottom: 40px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.team-card {
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.team-image {
  font-size: 64px;
  margin-bottom: 20px;
}

.team-card h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.role {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 14px;
}

.description {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.cta-section h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 15px 40px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .story-section h2,
  .values-section h2,
  .team-section h2,
  .cta-section h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 50px 20px;
  }

  .hero-content h1 {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .story-stats {
    grid-template-columns: 1fr;
  }

  .stat h3 {
    font-size: 28px;
  }
}
</style>

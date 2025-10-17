#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "particleslib_CPerParticleFloatInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"
#include "particleslib_CPerParticleFloatInput.hpp"

class particles_CParticleMassCalculationParameters {
    particles_ParticleMassMode_t m_nMassMode;
    char pad_1996[0x4];
    particleslib_CPerParticleFloatInput m_flRadius;
    particleslib_CPerParticleFloatInput m_flNominalRadius;
    particleslib_CPerParticleFloatInput m_flScale;
};

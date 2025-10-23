#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
class particleslib_CParticleCollectionVecInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CParticleCollectionVecInput.hpp"

class particles_CReplicationParameters {
    particles_ParticleReplicationMode_t m_nReplicationMode;
    bool m_bScaleChildParticleRadii;
    char pad_2256[0x3];
    particleslib_CParticleCollectionFloatInput m_flMinRandomRadiusScale;
    particleslib_CParticleCollectionFloatInput m_flMaxRandomRadiusScale;
    particleslib_CParticleCollectionVecInput m_vMinRandomDisplacement;
    particleslib_CParticleCollectionVecInput m_vMaxRandomDisplacement;
    particleslib_CParticleCollectionFloatInput m_flModellingScale;
};

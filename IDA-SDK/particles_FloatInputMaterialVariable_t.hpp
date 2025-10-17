#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"

class particles_FloatInputMaterialVariable_t {
    CUtlString m_strVariable;
    particleslib_CParticleCollectionFloatInput m_flInput;
};

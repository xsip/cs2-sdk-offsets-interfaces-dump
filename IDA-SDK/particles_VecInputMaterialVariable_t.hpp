#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionVecInput;
#include "particleslib_CParticleCollectionVecInput.hpp"

class particles_VecInputMaterialVariable_t {
    CUtlString m_strVariable;
    particleslib_CParticleCollectionVecInput m_vecInput;
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "particles_ParticleAttributeIndex_t.hpp"

class particles_MaterialVariable_t {
    CUtlString m_strVariable;
    particles_ParticleAttributeIndex_t m_nVariableField;
    float32 m_flScale;
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "particleslib_ParticleNamedValueConfiguration_t.hpp"

class particleslib_ParticleNamedValueSource_t {
    CUtlString m_Name;
    bool m_IsPublic;
    char pad_1717[0x7];
    CPulseValueFullType m_ValueType;
    particleslib_ParticleNamedValueConfiguration_t m_DefaultConfig;
};

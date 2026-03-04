#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_CParticleModelInput {
    char pad_607[0x10];
    particleslib_ParticleModelType_t m_nType;
    char pad_759[0x4];
    CParticleNamedValueRef m_NamedValue;
    int32_t m_nControlPoint;
    char pad_760[0x4];
};

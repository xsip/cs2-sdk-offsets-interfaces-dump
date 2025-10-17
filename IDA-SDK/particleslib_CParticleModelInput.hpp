#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particleslib_CParticleModelInput {
    char pad_1712[0x10];
    particleslib_ParticleModelType_t m_nType;
    char pad_1865[0x4];
    CParticleNamedValueRef m_NamedValue;
    int32_t m_nControlPoint;
    char pad_1866[0x4];
};

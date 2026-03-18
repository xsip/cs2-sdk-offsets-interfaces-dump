#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particleslib_CParticleModelInput {
    char pad_606[0x10];
    particleslib_ParticleModelType_t m_nType;
    char pad_756[0x4];
    CParticleNamedValueRef m_NamedValue;
    int32_t m_nControlPoint;
    char pad_757[0x4];
};

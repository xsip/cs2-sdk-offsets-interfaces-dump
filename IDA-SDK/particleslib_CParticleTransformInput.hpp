#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particleslib_CParticleTransformInput {
    char pad_1711[0x10];
    particleslib_ParticleTransformType_t m_nType;
    char pad_1856[0x4];
    CParticleNamedValueRef m_NamedValue;
    bool m_bFollowNamedValue;
    bool m_bSupportsDisabled;
    bool m_bUseOrientation;
    char pad_1857[0x1];
    int32_t m_nControlPoint;
    int32_t m_nControlPointRangeMax;
    float32 m_flEndCPGrowthTime;
};

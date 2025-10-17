#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleFloatInput;
#include "particles_ParticleAttributeIndex_t.hpp"
#include "particleslib_CParticleFloatInput.hpp"
#include "particleslib_CParticleFloatInput.hpp"
#include "particleslib_CParticleFloatInput.hpp"
#include "particleslib_CParticleFloatInput.hpp"

class particleslib_CParticleVecInput {
    char pad_1712[0x10];
    particleslib_ParticleVecType_t m_nType;
    Vector m_vLiteralValue;
    Color m_LiteralColor;
    char pad_1794[0x4];
    CParticleNamedValueRef m_NamedValue;
    bool m_bFollowNamedValue;
    char pad_1795[0x3];
    particles_ParticleAttributeIndex_t m_nVectorAttribute;
    Vector m_vVectorAttributeScale;
    int32_t m_nControlPoint;
    int32_t m_nDeltaControlPoint;
    Vector m_vCPValueScale;
    Vector m_vCPRelativePosition;
    Vector m_vCPRelativeDir;
    particleslib_CParticleFloatInput m_FloatComponentX;
    particleslib_CParticleFloatInput m_FloatComponentY;
    particleslib_CParticleFloatInput m_FloatComponentZ;
    particleslib_CParticleFloatInput m_FloatInterp;
    float32 m_flInterpInput0;
    float32 m_flInterpInput1;
    Vector m_vInterpOutput0;
    Vector m_vInterpOutput1;
    CColorGradient m_Gradient;
    Vector m_vRandomMin;
    Vector m_vRandomMax;
};

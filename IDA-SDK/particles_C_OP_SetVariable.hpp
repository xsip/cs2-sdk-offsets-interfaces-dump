#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
class particleslib_CParticleCollectionVecInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CParticleVariableRef.hpp"
#include "particleslib_CParticleTransformInput.hpp"
#include "particleslib_CParticleCollectionVecInput.hpp"

class particles_C_OP_SetVariable {
    char vTable1797[0x8];
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_1798[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_1799[0x2];
    bool m_bDisableOperator;
    char pad_1800[0x1];
    CUtlString m_Notes;
    char end_pad_1801[0x18];
    bool m_bRunOnce;
    char end_pad_1814[0x7];
    particleslib_CParticleVariableRef m_variableReference;
    particleslib_CParticleTransformInput m_transformInput;
    Vector m_positionOffset;
    QAngle m_rotationOffset;
    particleslib_CParticleCollectionVecInput m_vecInput;
    particleslib_CParticleCollectionFloatInput m_floatInput;
};

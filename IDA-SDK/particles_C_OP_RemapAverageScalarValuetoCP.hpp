#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particles_ParticleAttributeIndex_t.hpp"
#include "particleslib_CParticleRemapFloatInput.hpp"

class particles_C_OP_RemapAverageScalarValuetoCP {
    char vTable1798[0x8];
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_1799[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_1800[0x2];
    bool m_bDisableOperator;
    char pad_1801[0x1];
    CUtlString m_Notes;
    char end_pad_1802[0x18];
    bool m_bRunOnce;
    char end_pad_1815[0x7];
    particles_SetStatisticExpressionType_t m_nExpression;
    char pad_2156[0x4];
    particleslib_CParticleCollectionFloatInput m_flDecimalPlaces;
    int32_t m_nOutControlPointNumber;
    int32_t m_nOutVectorField;
    particles_ParticleAttributeIndex_t m_nField;
    char pad_2157[0x4];
    particleslib_CParticleRemapFloatInput m_flOutputRemap;
};

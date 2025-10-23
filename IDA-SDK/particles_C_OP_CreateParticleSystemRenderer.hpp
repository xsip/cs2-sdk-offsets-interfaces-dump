#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particles_CParticleVisibilityInputs.hpp"
#include "particleslib_CPerParticleVecInput.hpp"

class particles_C_OP_CreateParticleSystemRenderer {
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
    particles_CParticleVisibilityInputs VisibilityInputs;
    bool m_bCannotBeRefracted;
    bool m_bSkipRenderingOnMobile;
    char end_pad_1786[0x6];
    char m_hEffect[0x8];
    particles_EventTypeSelection_t m_nEventType;
    char pad_2025[0x4];
    char m_vecCPs[0x10];
    CUtlString m_szParticleConfig;
    particleslib_CPerParticleVecInput m_AggregationPos;
};

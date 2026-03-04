#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"

class particles_C_INIT_AgeNoise {
    void **__vftable_0;
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_691[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_692[0x2];
    bool m_bDisableOperator;
    char pad_693[0x1];
    CUtlString m_Notes;
    char end_pad_694[0x18];
    int32_t m_nAssociatedEmitterIndex;
    char end_pad_698[0x4];
    bool m_bAbsVal;
    bool m_bAbsValInv;
    char pad_730[0x2];
    float32 m_flOffset;
    float32 m_flAgeMin;
    float32 m_flAgeMax;
    float32 m_flNoiseScale;
    float32 m_flNoiseScaleLoc;
    Vector m_vecOffsetLoc;
    char end_pad_731[0x4];
};

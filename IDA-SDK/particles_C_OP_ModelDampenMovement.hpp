#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"
#include "particleslib_CPerParticleVecInput.hpp"

class particles_C_OP_ModelDampenMovement {
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
    int32_t m_nControlPointNumber;
    bool m_bBoundBox;
    bool m_bOutside;
    bool m_bUseBones;
    char m_HitboxSetName[128];
    char pad_990[0x1];
    particleslib_CPerParticleVecInput m_vecPosOffset;
    float32 m_fDrag;
    char end_pad_991[0x4];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CParticleCollectionFloatInput;
#include "particleslib_CParticleCollectionFloatInput.hpp"

class particles_C_OP_ControlPointToRadialScreenSpace {
    void **__vftable_0;
    particleslib_CParticleCollectionFloatInput m_flOpStrength;
    particles_ParticleEndcapMode_t m_nOpEndCapState;
    float32 m_flOpStartFadeInTime;
    float32 m_flOpEndFadeInTime;
    float32 m_flOpStartFadeOutTime;
    float32 m_flOpEndFadeOutTime;
    float32 m_flOpFadeOscillatePeriod;
    bool m_bNormalizeToStopTime;
    char pad_690[0x3];
    float32 m_flOpTimeOffsetMin;
    float32 m_flOpTimeOffsetMax;
    int32_t m_nOpTimeOffsetSeed;
    int32_t m_nOpTimeScaleSeed;
    float32 m_flOpTimeScaleMin;
    float32 m_flOpTimeScaleMax;
    char pad_691[0x2];
    bool m_bDisableOperator;
    char pad_692[0x1];
    CUtlString m_Notes;
    char end_pad_693[0x18];
    bool m_bRunOnce;
    char end_pad_706[0x7];
    int32_t m_nCPIn;
    Vector m_vecCP1Pos;
    int32_t m_nCPOut;
    int32_t m_nCPOutField;
    int32_t m_nCPSSPosOut;
    char end_pad_914[0x4];
};

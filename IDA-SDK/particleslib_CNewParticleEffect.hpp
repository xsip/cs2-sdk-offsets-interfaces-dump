#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CNewParticleEffect;
class particles_IParticleCollection;
class particleslib_PARTICLE_EHANDLE__;
class particleslib_CParticleProperty;

class particleslib_CNewParticleEffect {
    char pad_579[0x8];
    void **__vftable_0;
    particleslib_CNewParticleEffect* m_pNext;
    particleslib_CNewParticleEffect* m_pPrev;
    particles_IParticleCollection* m_pParticles;
    char* m_pDebugName;
    char pad_575[0x10];
    Vector m_vSortOrigin;
    float32 m_flScale;
    particleslib_PARTICLE_EHANDLE__* m_hOwner;
    particleslib_CParticleProperty* m_pOwningParticleProperty;
    char pad_576[0x10];
    float32 m_flFreezeTransitionStart;
    float32 m_flFreezeTransitionDuration;
    float32 m_flFreezeTransitionOverride;
    Vector m_LastMin;
    Vector m_LastMax;
    CSplitScreenSlot m_nSplitScreenUser;
    Vector m_vecAggregationCenter;
    char pad_577[0x2c];
    int32_t m_RefCount;
    char end_pad_578[0x4];
};

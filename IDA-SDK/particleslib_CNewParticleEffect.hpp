#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class particleslib_CNewParticleEffect;
class particles_IParticleCollection;
class particleslib_PARTICLE_EHANDLE__;
class particleslib_CParticleProperty;

class particleslib_CNewParticleEffect {
    char pad_1684[0x8];
    char vTable1679[0x8];
    particleslib_CNewParticleEffect* m_pNext;
    particleslib_CNewParticleEffect* m_pPrev;
    particles_IParticleCollection* m_pParticles;
    char* m_pDebugName;
    char pad_1680[0x10];
    Vector m_vSortOrigin;
    float32 m_flScale;
    particleslib_PARTICLE_EHANDLE__* m_hOwner;
    particleslib_CParticleProperty* m_pOwningParticleProperty;
    char pad_1681[0x10];
    float32 m_flFreezeTransitionStart;
    float32 m_flFreezeTransitionDuration;
    float32 m_flFreezeTransitionOverride;
    Vector m_LastMin;
    Vector m_LastMax;
    CSplitScreenSlot m_nSplitScreenUser;
    Vector m_vecAggregationCenter;
    char pad_1682[0x2c];
    int32_t m_RefCount;
    char end_pad_1683[0x4];
};

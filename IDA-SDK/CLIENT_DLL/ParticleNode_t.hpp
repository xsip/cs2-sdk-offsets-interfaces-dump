#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "ParticleIndex_t.hpp"
#include "GameTime_t.hpp"

class ParticleNode_t {
    char m_hEntity[0x4];
    ParticleIndex_t m_iIndex;
    GameTime_t m_flStartTime;
    float32 m_flGrowthDuration;
    Vector m_vecGrowthOrigin;
    float32 m_flEndcapTime;
    bool m_bMarkedForDelete;
    char end_pad_1074[0x3];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ParticleIndex_t.hpp"
#include "entity2_GameTime_t.hpp"

class client_ParticleNode_t {
    char m_hEntity[0x4];
    client_ParticleIndex_t m_iIndex;
    entity2_GameTime_t m_flStartTime;
    float32 m_flGrowthDuration;
    Vector m_vecGrowthOrigin;
    float32 m_flEndcapTime;
    bool m_bMarkedForDelete;
    char end_pad_1635[0x3];
};

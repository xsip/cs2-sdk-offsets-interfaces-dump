#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_CRandSimTimer {
    entity2_GameTime_t m_flNext;
    WorldGroupId_t m_nWorldGroupId;
    float32 m_flMinInterval;
    float32 m_flMaxInterval;
};

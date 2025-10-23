#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class server_RotatorHistoryEntry_t {
    Quaternion qInvChange;
    entity2_GameTime_t flTimeRotationStart;
    char end_pad_2778[0xc];
};

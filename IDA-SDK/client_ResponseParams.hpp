#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_ResponseFollowup;

class client_ResponseParams {
    void **__vftable_0;
    void **__vftable_1;
    int16_t odds;
    int16_t flags;
    char pad_2454[0x4];
    client_ResponseFollowup* m_pFollowup;
};

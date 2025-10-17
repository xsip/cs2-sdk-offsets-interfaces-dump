#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class ResponseFollowup;

class ResponseParams {
    char _vtable_pad_1080[0x10];
    int16_t odds;
    int16_t flags;
    char pad_1081[0x4];
    ResponseFollowup* m_pFollowup;
};

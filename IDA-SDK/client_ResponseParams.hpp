#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_ResponseFollowup;

class client_ResponseParams {
    char vTable1641[0x10];
    int16_t odds;
    int16_t flags;
    char pad_1642[0x4];
    client_ResponseFollowup* m_pFollowup;
};

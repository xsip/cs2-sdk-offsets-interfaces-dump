#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CHintMessage {
    char* m_hintString;
    char m_args[0x18];
    float32 m_duration;
    char end_pad_2731[0x4];
};

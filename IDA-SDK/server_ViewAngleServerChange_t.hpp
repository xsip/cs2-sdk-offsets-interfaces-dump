#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_ViewAngleServerChange_t {
    char vTable4144[0x30];
    client_FixAngleSet_t nType;
    char pad_4145[0x3];
    QAngle qAngle;
    uint32_t nIndex;
    char end_pad_4146[0x4];
};

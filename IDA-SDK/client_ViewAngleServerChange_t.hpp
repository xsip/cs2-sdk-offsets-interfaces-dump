#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_ViewAngleServerChange_t {
    char vTable1654[0x30];
    client_FixAngleSet_t nType;
    char pad_1655[0x3];
    QAngle qAngle;
    uint32_t nIndex;
    char end_pad_1656[0x4];
};

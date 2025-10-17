#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_CCS2ChickenGraphController {
    char vTable579[0x28];
    char m_vecParamsToResetInPostGraphUpdate[0x58];
    char m_action[0x20];
    char m_actionSubtype[0x20];
    char m_bActionReset[0x18];
    char m_idleVariation[0x18];
    char m_runVariation[0x18];
    char m_panicVariation[0x18];
    char m_squatVariation[0x18];
    char m_bInWater[0x18];
    bool m_bHasActionCompletedEvent;
    bool m_bWaitingForCompletedEvent;
    char end_pad_791[0x6];
};

 const SOCIALS = {
    EMAIL: 'data:image/jpeg;base64,/9j/4QCLRXhpZgAATU0AKgAAAAgABgEPAAIAAAAIAAAAVgESAAMAAAABAAEAAAEaAAUAAAABAAAAXgEbAAUAAAABAAAAZgEoAAMAAAABAAIAAAExAAIAAAAVAAAAbgAAAABCZUZ1bmt5AAAAASwAAAABAAABLAAAAAFCZUZ1bmt5IFBob3RvIEVkaXRvcgD/2wBDAAEBAQEBAQEBAQEBAQEBAQIBAQEBAQIBAQECAgICAgICAgIDAwQDAwMDAwICAwQDAwQEBAQEAgMFBQQEBQQEBAT/2wBDAQEBAQEBAQIBAQIEAwIDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT/wAARCAAgACADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAACQoLBwP/xAAmEAAABgIBAwQDAAAAAAAAAAABAgMEBQYHCAkKExQAEhUiESEk/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AC7dQb1BsPxaQ8drtrtHV3IG6mQK788IzwfI07AUM4/JGkzMtCiHlyDv2qCxjRMUgESFy5HtdhB7M+2W3y3L3EtMjcNmNl8w5flJJZZXwbTdXhqpFFXEplUIyDSOSOYoG9hP52bdJL6h9P16JxrBXnXNbz2uGuVp6OOG02ZMkXqOUs7Ba5VNm1rdRtdjqUFINU12rhzDoo12Gi1k2rhq4FiQ4IOG63bVI8drnw4cKmSbPNYGzfxq40wdtpQ4cJm4Ykc5NukxXLvFFUI3C5Y+mTyqXzldXVOQnkAkk7YLKlbSDVouJCqBM51p3y3L07tMdcNZ9l8w4glI1ZFXwatdXhapKlQExkkJODVOeOfIF95/53jdVL7D9P36pg9Pl1BsPylw8jrtsTHV3H+6mP66M8AwIfHU7PsM3/BHczDNDCPiSDT3Ji+jQMYgkVBy2Htd9Bl22K4b+FTG9ohcDYQ41sZ5w2zvcOMzUMTN8mXWIrdHijKHbjccgzJJVX4OuoLEOQFxSVdv1kjto9q7XA5U0ctoK844Uue5BrieejyE1ZzLje9SClZYLUyqPGtjqFUsdtgmDVRd0u2h1kbFMxaKTlw7cFYqEBdw5V7ixw03j7Ljzh+6jivxu3VoSxJi/WHNeUKhYrvKQL9xHNomYotziKnKkZNEl3PiyRJuCXSFMhwKlIkOYQKUxgeD2I5pOAjZStQcVcd/axWbdR5wLdibL2P63cK3lnDc6RIyKczW5UYJQEVRTOdFds4TXZPW6irZ41dNlVUD5t1BvT5Q/KXDx2xOu0jXcf7qY/rvwIhPD8dTs+wzf8naQ0y7KA+JINPcoDGSEpiCRUWzkO12F2Uz7ZbQ3cvTu0yNP2Y1ozDiCUjVlkvPtNKeFqkqVuJQVXjJxIh458gX3k/oZuFUvuH3/foKhWvHNLwE611qbiqdv7WLNbbxNjbss5dyBW7hZMsZknTpFRUmbJKhBJgssCZCIoNm6aDJk3TSbM2rVskkgRHzkELjzmB6jiwRuotoSy3i/Z7NeL6hXbvFwL9vHOYmHotMiLZKmZO0kHPixpISdXVFQhAMlHHOURKYphDxrTobuXuJaY6n6z60Zhy/KSSyKXn1alPDVSKK4EwJLyc4qQkcxQN7D/0PHCSX0H7/AK9Uweny6fKH4tIeR2J2Jka7kDdTIFdGBAIEfkadgKGcfg7uGhnZgDy5B37UwfSQFKQCJA2bB2u+u9D/2Q==',
    PHONE: 'data:image/jpeg;base64,/9j/4QCLRXhpZgAATU0AKgAAAAgABgEPAAIAAAAIAAAAVgESAAMAAAABAAEAAAEaAAUAAAABAAAAXgEbAAUAAAABAAAAZgEoAAMAAAABAAIAAAExAAIAAAAVAAAAbgAAAABCZUZ1bmt5AAAAASwAAAABAAABLAAAAAFCZUZ1bmt5IFBob3RvIEVkaXRvcgD/2wBDAAEBAQEBAQEBAQEBAQEBAQIBAQEBAQIBAQECAgICAgICAgIDAwQDAwMDAwICAwQDAwQEBAQEAgMFBQQEBQQEBAT/2wBDAQEBAQEBAQIBAQIEAwIDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT/wAARCAAgACADASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAACgsECQYHCP/EACgQAAAGAgEDBAMBAQAAAAAAAAECAwQFBgcICQAKERITFCEVIjFBQv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC2/uD+4OiuLeKj9cdcWNav26d+rf51ZSeAZKpa+xDnwVlLy7MAAryQeAC5mUaY5SlKkDlyAomQQeLlN4888mmX5+Aum/8Acts3jjK0INyoLfPLGxUqmWeIcmQV+bVYVyk3jAjTmK2MUYpArbyVMQ/5HrY0zuREbCcx9f3c2ANFWegWzfiu5evEbaiDNVkKVH3WNXShnKaiXlWPawTJBh7Z0v2btwKKf9L0Y93uN5xsnrNo7QHNWm32T5/Nc9eKNfmkWmpUYiuRsARlYos8h/fkPnUvVHCSCQiUycSqc/j0o+oATNZd8tytNrPGWzWPZXL+HZCLXSWLGVW5uyU+TKic6hEJKBVMeNfIAZRQfYeN1UhFQ36/Y9Mze307geD5UK/J6+7Bx1ex7utjiuhOOUoQwMKdn2GQ9Kbqdg2hhEzR80MZP58YBjkAqyblsYUjLt2Kn3rsHj92WtWnu7GsGylPk1YuSxRmaDsEmJH4xiErDnepNZ6McrefBW76NcSDNYR+vadKeegib5ayWfTXcvZXWK2Ri8W/w7l+aqsYVZqdmnKQ4O1F4GSQIcxjAg+jV494iImMIpOifsP96MD43+SbQPmE0HqfEVy/WthjbLeNGLKC1x2SsE42qpZ38W1Mwrr5nY3IGbMLIwbKGj1EpEPjSzf0gYy666yPV5PcD9vpX+VCDjtg9fZOu443Wx7XhhEnM4T4VMz7DtwE7SDnXRAEzR80MJwYSnpOUCKnbOSGSFuuxWfbLcfu7Gntqk6fsprBmbFElFqrkGTsFHerU+VTbCPvOYyeQIpGvm5QDyLhm4VS8ffr6A7ejdkzqalimyNr/urnGwZRfS7uRpWSaRV69W8bRUQYigxhX9ccFduHanpMmq4VRlW5FPQBUwSDycwTesekNizLyhY60Qok1EZTWU20Ph15fKszGUqc/A1+wroTtqQT8nA8cWLjX8p9iYBbpj9m/wBzzTfG/MhsGxRwDpabfGeo1njgr0lUsZ3W5VDCaMbIlKQyc06B03gmkeuUS+oz9RNucvjyI/XTD/t++37r3FPXpjPOeJivZK3TyVXSwL9/ApfMpWCoVb21nMDAOVCAq6eOlCEF/KCBCnKgi3bpkSIuu+D/2Q==',
    FB: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIACAAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAICQQFBwb/2gAIAQEAAAAAIJa/XH8r0nK4eI+5ZDAZmuqtZR//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAA//xAAtEAABAwMDAgUCBwAAAAAAAAADAgQFAQYHABETCDEUIUKBwiI3I1F1doKys//aAAgBAQABPwDPefI7D0e2jo5sJ/dD4VVtWq67CALtzn+KdSuT8wZKmhNF3NOP3r0tUAjo8hBjrVfoGAG1NOJjqJwgSJkZaSnIoDpdUtwPnVHTY3D3TUKlrprAee43L8aZg+CNjdLAVFu2iN+Iwu3ODf06yzdbq9cjXfcLk1SJPJHG339DYKuMKfZCddF1guX9yv8AIqjtas4tB42gVb89DnQmvIjXV7B5BjpePkroulvIQD6SfqhGAkbLZCpRHkv6E6xDdTmzMlWdPNz1GgckALnz2SpqdXEVKv4K1lW1nVmZEvC3XQlI8NJnUDf1Nyq5Ar90Kproy+8Jf0B7/ces4fd/JH7gff6axLazm88k2bb7YPJQ8mAh/wAktgK5TK9kJ11BdPzTLjMEzDGCyutiHiCYvkF0Hvwm+KtIgMz4UnyyDaGl4SRoNbXxomvMFY196ILssat9tRth5VynPu37S2pWTkZBysrl6RvwgqVdd1KIVVEDRrAGAWWImLiWlnAX10PhUGc46fhNhd+AHzVr/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwAf/9k=',
    IG: 'data:image/jpeg;base64,/9j/4QCLRXhpZgAATU0AKgAAAAgABgEPAAIAAAAIAAAAVgESAAMAAAABAAEAAAEaAAUAAAABAAAAXgEbAAUAAAABAAAAZgEoAAMAAAABAAIAAAExAAIAAAAVAAAAbgAAAABCZUZ1bmt5AAAAASwAAAABAAABLAAAAAFCZUZ1bmt5IFBob3RvIEVkaXRvcgD/2wBDAAEBAQEBAQEBAQEBAQEBAQIBAQEBAQIBAQECAgICAgICAgIDAwQDAwMDAwICAwQDAwQEBAQEAgMFBQQEBQQEBAT/2wBDAQEBAQEBAQIBAQIEAwIDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT/wAARCAAgACADASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAABAYKAgcJ/8QAJxAAAAYCAgIDAAIDAAAAAAAAAQIDBAUHBggJEgoRABMVFBYYITH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7GeQF5A+O8VcFGUHQkTjtkbq2JjoT7GPnwM+wqj4ZwZRJtOTrdM5Tunjoyav8GMA5AMCR11zFSBFF5FRnOoPku8mJUbtses94LYhsnAs5Af3vJS1HhpG7pP7UloLGHzyOZtmqia3sgsGiaRin9gIgPwXRWxWHJr5JlR21eiKeawF07ky1lkhZM5JWK/MxxpLTOJQ5iKlMRVizbwUKz+o5ep27XqIB2+L1dwRNx8Y2l5V+UrcvZbENe2WwZ6gxvHKYdp5je9353Ks3E+TFMTayLpKIiY+FihbrqKrlK1RQMggimQevoGnCNP/ACW+NAqt3VzWe8FTQ+LgacnjYHkwW3hx27Un2KrTuMsXkizctU00fZxftFESlJ7H0AfLU/H78grH+VKFk9f7/isdrjdWvsdGfcs8fAzDCbzhm4kSczUG3UOY7V61Mol/OjBOcAKqVw3MKQros5DY/MqL0H1zhuRvj7sDYvYPDrfurHKSrCxrttOQqLYDQaxMXdIZZPY/k+NQ662PZdH5dj32pEFX00K3RXTORQTKFPo7fSxGPGT5IlxW3RSJcLg6S3HirR/FjOsXFhHZC0ipvK4ciaJAKkxeITkyy+khPRG7roAD6/2GXHrXDTji8kmmqcu5ZPCoyl9ypqpwlJQhYyNM1nWkxB4nJdlDgVNm/TmoV0RU5vQN3pDiIh8RK6squtR8O2h4leWPXLYxKlv8kDXXieXUo3jse2AojPYpmtja0/CNZgCxczEzUSVskokosRFVFJFZBU4mTUJbz5Cfj4teT9jH7M6zPsewfdTAscJAumU6uENiV+xDPudlGSL0A9NJRp2OmykVAFMyZit3BiJFQXaxYWnyNeRlx4NWFFXndO3FMMsIL+HCIXPgsfmTRVFDqimEdlMrHPCyLYofWRJZs8cI9eoJn6+vgKtiWTXW3OIaucS3E9rlsYpSobIBdWWZbdTeOyHYG988lWaONpT821hwNFw0VCxJnKSaSax0UkVVll1SiRRQ7pyJV005HvJBuqm6RXLmcddm5ENURZWJ9SLAreEaQ8DlUkCiR/R2bBOGmXR1iHABbsjnAQD/AIHV3I55GHIa0f0VRt07c3Oyzgv4c23pjBI/DmyaK/ZFQsjlETGswjmxgE5FVnDxBHr2BQ/X38tL8evx7m/GG0fbO7OvcdzbdPOscPBMI6CcBNYpr/EPQKZ9HR74Q6u5V2AFTeSCQAmRMp27cx0jrrug/9k=',
    TWITTER: 'data:image/jpeg;base64,/9j/4QCLRXhpZgAATU0AKgAAAAgABgEPAAIAAAAIAAAAVgESAAMAAAABAAEAAAEaAAUAAAABAAAAXgEbAAUAAAABAAAAZgEoAAMAAAABAAIAAAExAAIAAAAVAAAAbgAAAABCZUZ1bmt5AAAAASwAAAABAAABLAAAAAFCZUZ1bmt5IFBob3RvIEVkaXRvcgD/2wBDAAEBAQEBAQEBAQEBAQEBAQIBAQEBAQIBAQECAgICAgICAgIDAwQDAwMDAwICAwQDAwQEBAQEAgMFBQQEBQQEBAT/2wBDAQEBAQEBAQIBAQIEAwIDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT/wAARCAAgACADASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAACwYHCgP/xAAnEAABBAMBAAEEAwADAAAAAAADAQIEBQYHCAkSAAoRExQVIhYhI//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDQj7k+5Oq/IPVdFVVVFV7Y6x2xVyJmodRTLB8Slp4QnujkyfJyCVDCrRGRwggErDTzBKIRBNFIkRzPupPbL1I68yywyfanZu7Kavlynmha/wBSZrO07rSkG5V+AI9LUFjhIg2r8Gml/vkOan+zPVVcvb2r6oyrrb1P7H21lMotpW0G8bjVOBVM0zyQKvGMMsD49TRBja5P1sMCv/lGaJWo48+S/wDPyerl0lZx9rjoXvPjHVHb3lXuWjxLK9na0h5pZc55Rms7YumCXKgb/bY9j2YzYsa5riw5TJUVBXgJSqYaNKeM1FL9BmT5v9k/UDlPK4GVak7Z398IckZ5GI7B2BP2vry3axVVRS6C4JKhOa9quar2jaVEcqsIxyI5El/Bz3017624hc6v2TQUWpOy9Z0DL3M8CppRHYdsupa8Uc2SYshnuOMYjFCyVXGeUsVZAXNMcZFcOz8a+3s4FXzbw/z2zTX6LHgYbFfmm5sFnnw7ZOU5n8BypmVypoVRJzm2CONGhWjZUUARgAgfgNqIdPhuqen/AAh9edDT9gpGqb7UfRgocWdSZNVWhNm4MW3bS2Ug0KJMMSCG9o553ii2H6TtHPG9WN+LXfQQv0n4nLqz187G5m2ds3DdCtyDf2QZprbYu2ollA1fKq8tsSZJjRbaxgx5R4UaRBtACWcyMcAZI1bIWOJppAED/trOG+2eIucMwxjobpvRO/NE5YaJb890el9r327aPBo6uOaW2ruCkFSxa+S+SSR/FrYhXlNJUj5TUa0Sy7308HMQ9bde0GydX3NBrPsvUdEWmwLM70LxYpsumUhJSYtkhhMeYQxnKc0KcxhFillSGuEQZ3KM0PoPgn0r4LyW2wLc2hOkNNoOwcP+4o6y2l63yUiI5qHrsgrHEqpyK0a/6Aciojfw5GqiogKvepXttxf5fawyuwzvY2LbE6GbUHHrnmjC8hj22wsjtFG5If8AcCC57qeuQnxcedNRn/mMqAHJMjAPLO5/XpH1m9RNI1OwMryrZO1ujOlIFhkNnY2Uq6j4jVSbt13flghOQiRaypgNspI4g/wIIIfwY38IifVIc7ee3c3XuZRMQ585b3htO8sprQybOtwWfFxereVUd+62vpTBV0Ea/JFU02QJn+k/1/2n0lj9vr9vrS+V9LZ9CdCWeN7C7T2Fjf8Ax8pcfVbHDdEU0hWFlUtLKe1qyp0pWCSdZIxjfiJI8dP1fuNMD//Z'
  }

  module.exports = {SOCIALS}